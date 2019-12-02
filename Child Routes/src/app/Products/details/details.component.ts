import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductServices} from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any = {id: 0, name: '', description: '', image: ''};

  constructor(private routes: ActivatedRoute, private productServices: ProductServices) {

  }

  ngOnInit() {
    this.routes.params.subscribe(parameters => {
      const id = parameters['id'];
      this.product = this.productServices.productDetailed(id);
    });
  }


}
