import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowListComponent} from './show-list/show-list.component'
import {UserService} from '../../services/user.service'
import {ReactiveFormsModule} from '@angular/forms'
import {FormControlGroupComponent} from './form/form-control-group'
import {ValidationService} from './form/form-validation.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ValidationService
  ],
  declarations: [
    ShowListComponent,
    FormControlGroupComponent
  ],
  exports: [
    ShowListComponent,
    FormControlGroupComponent
  ]
})
export class SharedModule { }
