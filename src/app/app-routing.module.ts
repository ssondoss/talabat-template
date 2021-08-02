import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { from } from 'rxjs';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'all-shops', component: ShopsComponent },
  { path: '', component: HomeComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'regestration', component: RegestrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [],
})
export class AppRoutingModule {}
