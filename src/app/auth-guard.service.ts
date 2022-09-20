import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AngularFireAuth, public router: Router, public _snackBar: MatSnackBar) {}
  async canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      let user = await this.auth.currentUser;
      let isAuthenticated = user ? true : false;
      if (!isAuthenticated) {
        this.openSnackBar('Please login to use Simple CRM!');
        this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

  logIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/user']);
        this.openSnackBar('Login successfully.');
      })
      .catch((error) => {
        console.log('error code: ', error.code, ' errorMessage: ', error.message);
        this.openSnackBar(error.message);
      })
  }

  logOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.openSnackBar('Logout sucessfully');
    });
  }

  signUp(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/user']);
        this.openSnackBar('SignUp successfully');
      })
      .catch((error) => {
        console.log('error code: ', error.code,' errorMessage: ', error.message);
        this.openSnackBar(error.message);
      })
      ;
  }

 
}