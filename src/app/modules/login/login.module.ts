import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {FormModule} from '../form/form.module';
import {UserService} from '../../services/user.service';

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FormModule
  ],
  declarations: [LoginComponent],
  providers: [
    UserService
  ]
})
export class LoginModule { }
