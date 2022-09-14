import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailLogIn: string = '';
  passwordLogIn: string = '';
  emailSignUp: string = '';
  passwordSignUp: string = '';

  constructor(public Auth: AuthGuardService) { 

  }

  ngOnInit(): void {
  }

  logIn() {
    this.Auth.logIn(this.emailLogIn, this.passwordLogIn);
  }

  signUp() {
    this.Auth.signUp(this.emailSignUp, this.passwordSignUp);
  }
}