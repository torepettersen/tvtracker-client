import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component';
import {Route, RouterModule} from '@angular/router';
import {TvMazeService} from '../../services/tv-maze.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TvtrackerService} from '../../services/tvtracker.service';
import {SharedModule} from '../shared/index'

const ROUTES: Route[] = [
  { path: 'search', component: SearchComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    TvMazeService,
    TvtrackerService
  ]

})
export class SearchModule { }
