import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { NavbarModule } from './modules/navbar';
import {SignupModule} from './modules/signup';
import {LoginModule} from './modules/login';
import {SearchModule} from './modules/search';
import {HomeModule} from './modules/home';
import {SubscribedModule} from './modules/subscribed'
import {UserService} from './services/user.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    NavbarModule,
    HomeModule,
    SignupModule,
    LoginModule,
    SearchModule,
    SubscribedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
