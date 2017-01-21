import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup.component';
import {FormModule} from '../form/form.module';
import {UserService} from '../../services/user.service';

const ROUTES: Route[] = [
  { path: 'signup', component: SignupComponent},
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FormModule
  ],
  declarations: [SignupComponent],
  providers: [
    UserService
  ]
})
export class SignupModule { }
