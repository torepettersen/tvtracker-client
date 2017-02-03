import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router'
import {SubscribedComponent} from './subscribed.component'
import {TvtrackerService} from '../../services/tvtracker.service'
import {SharedModule} from '../shared/index'


const ROUTES: Route[] = [
  { path: 'subscribed', component: SubscribedComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SubscribedComponent],
  providers: [
    TvtrackerService
  ]
})
export class SubscribedModule { }
