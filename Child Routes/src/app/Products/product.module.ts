import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { ProductServices } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { ItemEditComponent } from './edit/item-edit.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';

const productRoutes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: '', component: InstructionsComponent },
      { path: 'details/:id', component: DetailsComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent,  
  ],
  providers:[ProductServices]
})
export class ProductModule { }
