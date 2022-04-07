import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/templates/products/products.component';
import { LoginComponent } from './components/templates/login/login.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { ProductComponent } from './components/templates/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CheckoutComponent } from './components/templates/checkout/checkout.component';
import { CartComponent } from './components/molecules/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'checkout', component: CheckoutComponent},

      {path: '**', component: NotfoundComponent}
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
