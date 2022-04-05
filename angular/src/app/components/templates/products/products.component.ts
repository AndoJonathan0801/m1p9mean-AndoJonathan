import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/interface';
import Api from './service/product.service.faker';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = Api.getProducts();
  }

  buy() {

  }

  view() {
    
  }
}
