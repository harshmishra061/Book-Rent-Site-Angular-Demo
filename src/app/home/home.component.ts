import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MasterService } from '../master.service';
import { ItemComponent } from '../item/item.component';
import { CommonModule} from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ItemComponent, CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  btn1 = "Rent"
  btn1Comp = "Rented"
  btn2 = "Wishlist"
  btn2Comp = "Wishlisted"
  constructor(public serv : MasterService, public translate : TranslateService) {
    const userLang = navigator.language || 'en';
    const languageCode = userLang.split('-')[0];
    this.translate.setDefaultLang(languageCode);
    this.translate.use(languageCode);
  }
}
