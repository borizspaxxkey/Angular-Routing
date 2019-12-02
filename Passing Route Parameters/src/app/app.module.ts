import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductServices } from './services/product.service';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
  {path: '', component: InstructionsComponent},
  {path: 'details/:id/:name', component: DetailsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
