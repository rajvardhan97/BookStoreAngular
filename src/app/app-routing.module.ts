import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'register', component: RegisterationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'resetpassword/:token', component: ResetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
