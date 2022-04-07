import { Component, OnInit } from '@angular/core';
import { Cart, Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart!: Cart;

  constructor() { }

  ngOnInit(): void {

  }

  
}
