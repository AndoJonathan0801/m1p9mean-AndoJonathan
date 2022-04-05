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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
      {path: 'product/:id', component: ProductComponent},
      {path: '**', component: NotfoundComponent}
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
