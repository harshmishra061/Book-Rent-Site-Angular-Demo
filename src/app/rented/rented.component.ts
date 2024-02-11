import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemComponent } from '../item/item.component';
import { MasterService } from '../master.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-rented',
  standalone: true,
  imports: [NavbarComponent, ItemComponent, CommonModule, TranslateModule],
  templateUrl: './rented.component.html',
  styleUrl: './rented.component.css'
})
export class RentedComponent {
  btn1 = "Rent"
  btn1Comp = "Return"
  btn2 = "Wishlist"
  btn2Comp = "Wishlisted"
  constructor(public serv : MasterService){

  }
}
