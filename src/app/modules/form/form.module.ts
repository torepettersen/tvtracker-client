import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationService} from './form-validation.service';
import {FormControlGroupComponent} from './form-control-group';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormControlGroupComponent
  ],
  providers: [
    ValidationService
  ],
  exports: [
    FormControlGroupComponent
  ]
})
export class FormModule { }
