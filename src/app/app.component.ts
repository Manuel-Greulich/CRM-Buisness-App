import { Component } from '@angular/core';
import { keepUnstableUntilFirst } from '@angular/fire';
import { Auth, user } from '@angular/fire/auth';  
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

  toggle(){
    
  }
  


}