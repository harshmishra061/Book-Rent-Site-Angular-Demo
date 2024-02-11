import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../master.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-newbook',
  standalone: true,
  imports: [FormsModule, NavbarComponent, TranslateModule],
  templateUrl: './newbook.component.html',
  styleUrl: './newbook.component.css'
})
export class NewbookComponent {
  constructor(public serv : MasterService){}
  output = "";
  count = 0;
  insertIntoBookDetails(obj : any) : void {
    this.count++;
    let id1 = this.serv.bookDetails.length + 1;
    this.serv.bookDetails.push({...obj, rented : "", wishlist : [], id : id1});
    console.log(this.serv.bookDetails);
    this.output = `${this.count} Book Added Successfully!`;
    this.removeContentOfOutput();
  }

  removeContentOfOutput() : void {
    setTimeout(() => {
      this.output = "";
    }, 1300);
  }
}
