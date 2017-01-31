import {Component, Input, OnInit} from '@angular/core'
import {Show} from '../../../interfaces'
import {TvtrackerService} from '../../../services/tvtracker.service'
import {UserService} from '../../../services/user.service'


@Component({
  selector: 'show-list',
  templateUrl: 'show-list.component.html',
  styleUrls: ['show-list.component.sass']
})

export class ShowListComponent implements OnInit {
  @Input() public shows: Array<Show>
  subscribedShows: Show[] = []
  
  constructor(
    private _tvtrackerService: TvtrackerService,
    private _userService: UserService
  ) {}
  
  ngOnInit() {
    this._tvtrackerService.subscribedShows()
      .subscribe(res => {
        this.subscribedShows = res
      })
  }
  
  subscribe(show: Show) {
    this._tvtrackerService.subscribe(show.tvmazeId)
  }
  
  unsubscribe(show: Show) {
    let id = this.subscribedShows.find((subscribedShow: Show) => {
      if(subscribedShow.tvmazeId === show.tvmazeId) return true
    }).id
    this._tvtrackerService.unsubscribe(id)
  }
  
  isSubscribed(show: Show) : boolean {
    return this.subscribedShows.some((subscribedShow: Show) => subscribedShow.tvmazeId === show.tvmazeId)
  }
}
