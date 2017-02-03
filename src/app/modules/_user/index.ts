import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component'
import {UserService} from '../../services/user.service';
import {SharedModule} from '../shared/index'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
