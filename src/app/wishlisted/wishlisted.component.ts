import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { MasterService } from '../master.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wishlisted',
  standalone: true,
  imports: [NavbarComponent, ItemComponent, CommonModule, TranslateModule],
  templateUrl: './wishlisted.component.html',
  styleUrl: './wishlisted.component.css'
})
export class WishlistedComponent {
  btn1 = "Rent"
  btn1Comp = "Rented"
  btn2 = "Wishlist"
  btn2Comp = "Remove"

  title = 'angularLearn';
  constructor(public serv : MasterService) {}

  userWishlisted(item : any) : boolean {
    let x = item.wishlist.some((i : any) => i == this.serv.userSignedIn);
    if(x) return true;
    return false;
  }

}
