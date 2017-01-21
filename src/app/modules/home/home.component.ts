import {Component, OnInit, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {TvtrackerService} from '../../services/tvtracker.service';
import {Show, Episode} from '../../interfaces';
import {TvMazeService} from '../../services/tv-maze.service';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  shows: Array<Show>

  constructor(
    private _tvtrackerService: TvtrackerService,
    private _tvmazeSerive: TvMazeService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    if(this._userService.isAuthenticated()) {
      this._tvtrackerService.subscribedShows()
        .flatMap(shows => {
          this.shows = shows
          return Observable.from(this.shows)
        })
        .subscribe((show: Show) => {
          this._tvmazeSerive.getEpisodes(show.tvmazeId)
            .subscribe((episodes: Episode[]) => {
              show.nextEpisode = episodes.find((episode: Episode) => {
                return new Date(episode.airstamp).getTime() > Date.now()
              })
              show.previousEpisode = episodes.reverse().find((episode: Episode) => {
                return new Date(episode.airstamp).getTime() < Date.now()
              })

              let idx = this.shows.indexOf(show)
              this.shows[idx] = show
            })
        })
    }

  }

  unsubscribe(show: Show) {
    this.shows = this.shows.filter((subscribedShow: Show) => subscribedShow.id !== show.id)
  }

}
