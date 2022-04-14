import { Component, OnInit } from '@angular/core';
import {Cart, Product} from 'src/app/interface/interface';
import cartService from './service/cart.service.faker';
import ProductService from '../../templates/product/service/product.service.faker';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    this.cart = cartService.getCart(1);
    this.getProductInfo();
  }

  getProductInfo(): void {
    this.cart.command.forEach(product => {
      this.products.push(ProductService.getProduct(product.id_product));
      });
    }
}
