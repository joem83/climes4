import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: any;
  name: any;
  constructor(private _authService: AuthService) {
  }
  ngOnInit() {
    this._authService.isLoggedInObs().subscribe((data) => {
      this.user = data;
     //console.log(this.user);
      this.name= JSON.parse(localStorage.getItem("user"));
      //console.log(this.name);
      
if(this.name) {
        //console.log(name);
        this.user= this.name.fn;
        }
    });

}

  logout() {
    //console.log('logout');
    this._authService.logout();
  }

  guest() {
    this.user = this._authService.isLoggedIn();
  }
}