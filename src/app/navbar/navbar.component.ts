import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../master.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public serv : MasterService, private router : Router, private translate : TranslateService) { }
  handleSignOut() : void {
    this.serv.userSignedIn = "";
    this.router.navigate([""]);
  }

  isAdmin() : boolean {
    return this.serv.userSignedIn == "admin@gmail.com";
  }

  match(str : any) : boolean {
    return str === this.serv.currentNavPos;
  }

  mark(str : any) : void {
    this.serv.currentNavPos = str;
  }

  handleThemeButton() : void {
    if(document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      this.serv.mode = "Dark Mode"
    } else {
      document.body.classList.add("dark-theme");
      this.serv.mode = "Light Mode"
    }
  }
}
