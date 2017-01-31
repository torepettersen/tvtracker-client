import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowListComponent} from './show-list/show-list.component'
import {UserService} from '../../services/user.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    ShowListComponent
  ],
  exports: [
    ShowListComponent
  ]
})
export class SharedModule { }
