import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'climes4';
  user = 1;
  constructor(private _authService: AuthService) {
  }

  logout() {
    console.log('logout');
    this._authService.logout();
  }
}
