import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  email;
  password;

  constructor(private _authService: AuthService, private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  signin(val) {
    const user = {
      email: val.email,
      password: val.password
    }

    this._authService.login(user).subscribe(data => {
      this.username = data;
      //console.log(this.username);
    })

   // this._authService.login(val.email, val.password);
  }

  logout() {
    this._authService.logout();
  }

}
