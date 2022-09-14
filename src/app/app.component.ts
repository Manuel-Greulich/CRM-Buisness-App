import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
// import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';

  constructor(public Auth: AuthGuardService) {}

  logOut() {
    this.Auth.logOut();
  }
}