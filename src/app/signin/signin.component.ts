import { Component} from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { TranslateModule } from '@ngx-translate/core';
let users = [
  { user : "admin@gmail.com",
    password : "admin"
  },
  {
    user : "alice@gmail.com",
    password : "alice"
  },
  {
    user : "beth@gmail.com",
    password : "beth"
  }
]
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  constructor(private router : Router, private serv : MasterService) {}
  handleSignIn(result : any) : void {
    if(users.find(u => u.user === result.user && u.password === result.password)) {
      alert("User Logged In");
      this.serv.userSignedIn = result.user;
      this.serv.currentNavPos = "home"
      this.router.navigate(["/home"]);
    } else {
      alert("Incorrect Credentials");
    }
  }
}
