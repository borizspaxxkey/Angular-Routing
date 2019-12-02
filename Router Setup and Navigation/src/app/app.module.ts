import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes, Router} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ResetComponent} from "./reset-password/reset-password.component";
import {OutletComponent} from "./outlet/outlet.component";
import {NotFoundComponent} from "./404/404.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OutletComponent,
    LoginComponent,
    ResetComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
