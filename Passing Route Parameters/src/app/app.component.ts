import { Component, OnInit } from '@angular/core';
import {ProductServices} from './services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 products: any;

  constructor(private productServices: ProductServices) { }

  ngOnInit() {
    this.products = this.productServices.productList();
  }


}
