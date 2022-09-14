import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
// import { AuthGuardService } from './auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'user', component: UserComponent, canActivate: [AuthGuardService] },
  {path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
