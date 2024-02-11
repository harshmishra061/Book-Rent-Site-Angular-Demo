import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  @Input() public item: any;
  @Input() public btn1 : any;
  @Input() public btn1Comp : any;
  @Input() btn2 : any;
  @Input() btn2Comp : any;
  isRented = false;
  isWishlisted = false;
  constructor(private serv : MasterService) {
  }

  ngOnInit(): void {
    this.isRented = this.item.rented != "";
    this.isWishlisted = this.item.wishlist.some((i : any) => i == this.serv.userSignedIn);
  }
  // {id: 5, title: "Sachin Mishra", subtitle: "To Kaise Hain aap", author: "Muskan", description: "Hello", rented: null, wishlist: []}
  handleRentClick() : void {
    if(!this.isRented) {
      let newBookDetails = this.serv.bookDetails.map((curritem)=>{
        if(curritem == this.item) {
          return {...curritem, rented : this.serv.userSignedIn}
        }
        return curritem;
      })
      this.serv.bookDetails = newBookDetails;
      this.serv.rentCount++;
    } else {
      let newBookDetails = this.serv.bookDetails.map((curritem)=>{
        if(curritem == this.item) {
          return {...curritem, rented : ""}
        }
        return curritem;
      })
      this.serv.bookDetails = newBookDetails;
      this.serv.rentCount--;
    }
    this.isRented = !this.isRented;
  }

  handleWishlistClick() : void {
    if(!this.isWishlisted) {
      let newBookDetails = this.serv.bookDetails.map((curritem)=>{
        if(curritem == this.item) {
          this.item.wishlist.push(this.serv.userSignedIn);
        }
        return curritem;
      })
      this.serv.bookDetails = newBookDetails;
      this.serv.wishlistCount++;
    } else {
      let newBookDetails = this.serv.bookDetails.map((curritem)=>{
        if(curritem == this.item) {
          return {...curritem, wishlist : (curritem.wishlist.filter(i => i !== this.serv.userSignedIn))}
        }
        return curritem;
      })
      this.serv.bookDetails = newBookDetails;
      this.serv.wishlistCount--;
    }
    this.isWishlisted = !this.isWishlisted;
  }

  isAdmin() : boolean {
    return this.serv.userSignedIn == "admin@gmail.com"
  }

  handleRemovePermanently() : void {
    let newBookDetails = this.serv.bookDetails.filter((i) => i != this.item);
    this.serv.bookDetails = newBookDetails;
  }
}
