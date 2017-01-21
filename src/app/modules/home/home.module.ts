import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvtrackerService} from '../../services/tvtracker.service';
import {HomeComponent} from './home.component';
import {Route, RouterModule} from '@angular/router';
import {TvMazeService} from '../../services/tv-maze.service';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    TvtrackerService,
    TvMazeService
  ]
})
export class HomeModule { }
