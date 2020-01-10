import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  fn;
  ln;
  email;
  address;
  password;
  role;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(val) {
    const user = {
      fn: val.fn,
      ln: val.ln,
      email: val.email,
      address: val.address,
      password: val.password,
      role: "customer"
    }
//console.log(user);

    this._authService.register(user).subscribe(data => {
      this.user = data;
     // console.log(this.user);
      this.router.navigate(['/login']);
    })

   // this._authService.login(val.email, val.password);
  }
}
