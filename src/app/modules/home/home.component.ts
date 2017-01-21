import {Component, OnInit, OnChanges} from '@angular/core';
import {TvtrackerService} from '../../services/tvtracker.service';
import {Show, Episode} from '../../interfaces';
import {TvMazeService} from '../../services/tv-maze.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  shows: Array<Show>

  constructor(
    private _tvtrackerService: TvtrackerService,
    private _tvmazeSerive: TvMazeService
  ) { }

  ngOnInit() {
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
          })
      })

      /*
      .subscribe((episodes: Episode[]) => {

        console.log(episodes.find((episode: Episode) => {return new Date(episode.airstamp).getTime() > Date.now()}))
      })*/

  }

  unsubscribe(show: Show) {
    this.shows = this.shows.filter((subscribedShow: Show) => subscribedShow.id !== show.id)
  }

}
