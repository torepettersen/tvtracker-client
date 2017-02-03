import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvtrackerService} from '../../services/tvtracker.service';
import {HomeComponent} from './home.component';
import {Route, RouterModule} from '@angular/router';
import {TvMazeService} from '../../services/tv-maze.service';
import {UserService} from '../../services/user.service';
import {OrderByPipe} from '../../pipes/order-by.pipe';
import {PipesModule} from '../../pipes';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    PipesModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    TvtrackerService,
    TvMazeService,
    UserService
  ]
})
export class HomeModule { }
