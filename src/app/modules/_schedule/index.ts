import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import {Route, RouterModule} from '@angular/router'
import {ScheduleComponent} from './schedule.component'
import {UserService} from '../../services/user.service'
import {TvMazeService} from '../../services/tv-maze.service'
import {TvtrackerService} from '../../services/tvtracker.service'

const ROUTES: Route[] = [
  { path: 'schedule', component: ScheduleComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    CalendarModule.forRoot()
  ],
  declarations: [
    ScheduleComponent
  ],
  providers: [
    TvtrackerService,
    TvMazeService,
    UserService
  ]
})
export class ScheduleModule { }
