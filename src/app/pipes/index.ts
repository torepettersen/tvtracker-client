import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderByPipe} from './order-by.pipe';
import {OrderByAirdatePipe} from './order-by-airdate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    OrderByAirdatePipe
  ],
  exports: [
    OrderByPipe,
    OrderByAirdatePipe
  ]
})
export class PipesModule { }
