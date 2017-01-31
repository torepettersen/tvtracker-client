import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowListComponent} from './show-list/show-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowListComponent
  ],
  exports: [
    ShowListComponent
  ]
})
export class SharedModule { }
