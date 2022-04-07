import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Offer, Product } from 'src/app/interface/interface';
import Api from './service/product.service.faker';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {} as Product; 
  offers = [] as Offer[];

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.product = Api.getProduct(productIdFromRoute);
    this.offers = Api.getOffers(productIdFromRoute);
  }

  addToCart() {
    
  }

}
