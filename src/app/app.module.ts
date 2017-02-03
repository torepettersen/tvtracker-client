import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { NavbarModule } from './modules/_navbar';
import {SearchModule} from './modules/_search';
import {HomeModule} from './modules/_home';
import {SubscribedModule} from './modules/_subscribed'
import {UserModule} from './modules/_user'
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
    UserModule,
    SearchModule,
    SubscribedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
