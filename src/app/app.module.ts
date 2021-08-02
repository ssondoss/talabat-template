import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DpDatePickerModule } from 'ng2-date-picker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverModule } from 'ngx-smart-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ApplicationStateService } from './app.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FooterComponent } from './footer/footer.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { SmallNavComponent } from './join-us/small-nav/small-nav.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrdersComponent } from './my-account/my-orders/my-orders.component';
import { SavedAddressesComponent } from './my-account/saved-addresses/saved-addresses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MaterialModule } from './material.module';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { AddAddressComponent } from './my-account/add-address/add-address.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RateOrderComponent } from './my-account/rate-order/rate-order.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OrderDetailsComponent } from './my-account/order-details/order-details.component';
import { AddProduct } from './shop/add-product/add-product.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBoxComponent,
    AddAddressComponent,
    FooterComponent,
    HomeComponent,
    ShopsComponent,
    ForgetPasswordComponent,
    ShopComponent,
    SmallCardComponent,
    JoinUsComponent,
    SmallNavComponent,
    MyAccountComponent,
    MyOrdersComponent,
    SavedAddressesComponent,
    ChangePasswordComponent,
    CheckoutComponent,
    RegestrationComponent,
    LoginComponent,
    RateOrderComponent,
    ResetPasswordComponent,
    OrderDetailsComponent,
    AddProduct,
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
    MatStepperModule,
    Ng2TelInputModule,
    FormsModule,
    HttpClientModule,

    DialogModule,
    MaterialModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    PopoverModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BsDatepickerModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ApplicationStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
