import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MasterService } from '../master.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-adminrentlist',
  standalone: true,
  imports: [NavbarComponent, CommonModule, TranslateModule],
  templateUrl: './adminrentlist.component.html',
  styleUrl: './adminrentlist.component.css'
})
export class AdminrentlistComponent {
  constructor(public serv : MasterService) {}
}
