import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MasterService } from '../master.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-adminwishlist',
  standalone: true,
  imports: [NavbarComponent, CommonModule, TranslateModule],
  templateUrl: './adminwishlist.component.html',
  styleUrl: './adminwishlist.component.css'
})
export class AdminwishlistComponent {
  constructor(public serv : MasterService) {}
}
