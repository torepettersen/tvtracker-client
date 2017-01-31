import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarModule } from './modules/navbar';
import {SignupModule} from './modules/signup';
import {LoginModule} from './modules/login';
import {SearchModule} from './modules/search';
import {HomeModule} from './modules/home';
import {SubscribedModule} from './modules/subscribed'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    NavbarModule,
    HomeModule,
    SignupModule,
    LoginModule,
    SearchModule,
    SubscribedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
