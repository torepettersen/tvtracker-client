import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ReplaySubject, Observable} from 'rxjs'
import {Show, Episode} from '../interfaces'
import {UserService} from './user.service'
import {TvMazeService} from './tv-maze.service'

@Injectable()
export class TvtrackerService {
  _url = 'http://192.168.1.52:8080'
  _shows: ReplaySubject<Show[]> = new ReplaySubject()
  _episodes: ReplaySubject<Episode[]> = new ReplaySubject()

  constructor(
    private _http: Http,
    private _userService: UserService,
    private _tvmazeSerive: TvMazeService
  ) {
    
    this._userService.getTokenObserver()
      .filter(token => token != null)
      .flatMap(() => this.getSubscribedShows())
      .map(shows => this._shows.next(shows))
      .subscribe(() => this.getSubscribedEpisodes())
  }

  subscribedShows(): ReplaySubject<Show[]> {
    return this._shows
  }
  
  subscribedEpisodes(): ReplaySubject<Episode[]> {
    return this._episodes
  }
  
  getSubscribedShows(): Observable<Show[]> {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', token)

    return this._http.get(this._url + '/subscribed', {headers: headers})
      .map(res => res.json().shows)
  }
  
  getSubscribedEpisodes() {
    let episodes: Episode[] = []
    
    this._shows
      .flatMap((shows: Show[]) => Observable.from(shows))
      .flatMap((show: Show) => {
        return this._tvmazeSerive.getEpisodes(show.tvmazeId)
          .map((episodes: Episode[]) => {
            episodes.forEach(episode => {
              episode.showId = show.id
            })
            return episodes
          })
      })
      .subscribe((e: Episode[]) => {
        episodes = episodes.concat(e)
        this._episodes.next(episodes)
      })
  }

  subscribe(tvmazeId: number) {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', token)

    this._http.post(
      this._url + '/subscribe',
      'tvmazeId=' + tvmazeId,
      {headers: headers}
    )
      .subscribe(res => this._shows.next(res.json().shows))
  }
  
  unsubscribe(id: number) {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', token)
    
    this._http.post(
      this._url + '/unsubscribe',
      'id=' + id,
      {headers: headers}
    )
      .subscribe(res => this._shows.next(res.json().shows))
  }
}
