import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { GetAllBookComponent } from './Components/getallbook/get-all-book/get-all-book.component';
import { CartComponent } from './Components/Cart/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist/wishlist.component';
import { OrderComponent } from './Components/order/order/order.component';
import { QuickviewComponent } from './Components/quickview/quickview/quickview.component';

const routes: Routes = [
  {path: 'register', component: RegisterationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'resetpassword/:token', component: ResetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent,
children:[
  {path: '', redirectTo:"/dashboard/getallbooks", pathMatch:'full'},
  {path:'getallbooks', component: GetAllBookComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'order', component: OrderComponent},
  {path: 'quickview', component: QuickviewComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
