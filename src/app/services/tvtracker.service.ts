import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ReplaySubject, Observable} from 'rxjs'
import {Show, Episode} from '../interfaces'
import {UserService} from './user.service'
import {TvMazeService} from './tv-maze.service'
import { environment } from '../../environments/environment'

@Injectable()
export class TvtrackerService {
  _url = environment.api_url
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
      .flatMap(shows => {
        this._shows.next(shows)
        return this.getSubscribedEpisodes(shows)
      })
      .subscribe((episodes) => this._episodes.next(episodes))
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

    return this._http.get(`${this._url}/subscriptions`, {headers: headers})
      .map(res => res.json().shows)
  }
  
  getSubscribedEpisodes(shows: Show[]): Observable<Episode[]> {
    let episodes : Episode[] = []
    return Observable.from(shows)
      .flatMap((show: Show) => {
        return this._tvmazeSerive.getEpisodes(show.tvmazeId)
          .map((e: Episode[]) => {
            e.forEach(episode => {
              episode.showId = show.id
            })
            episodes = episodes.concat(e)
            return episodes
          })
      })
  }

  subscribe(tvmazeId: number) {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', token)

    this._http.post(
      `${this._url}/subscriptions`,
      'tvmazeId=' + tvmazeId,
      {headers: headers}
    )
      .subscribe(res => this._shows.next(res.json().shows))
  }
  
  unsubscribe(id: number) {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', token)
    
    this._http.delete(`${this._url}/subscriptions/${id}`, {headers: headers})
      .subscribe(res => this._shows.next(res.json().shows))
  }
}
