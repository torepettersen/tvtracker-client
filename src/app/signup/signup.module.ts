import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { SignupComponent } from './signup.component';


const ROUTES: Route[] = [
  { path: 'signup', component: SignupComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
