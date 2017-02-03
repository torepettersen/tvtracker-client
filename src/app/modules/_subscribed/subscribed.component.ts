import { Component, OnInit } from '@angular/core';
import {TvtrackerService} from '../../services/tvtracker.service'
import {Show} from '../../interfaces'

@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.sass']
})
export class SubscribedComponent implements OnInit {
  subscribedShows: Show[] = []

  constructor(
    private tvtrackerService: TvtrackerService
  ) { }

  ngOnInit() {
    this.tvtrackerService.subscribedShows()
      .subscribe(res => {
        this.subscribedShows = res
      })
  }

}
