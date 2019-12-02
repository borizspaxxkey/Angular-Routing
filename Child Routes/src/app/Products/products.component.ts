import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductServices} from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private router: Router, private productServices: ProductServices) { }

  ngOnInit() {
    this.products = this.productServices.productList();
  }

}
