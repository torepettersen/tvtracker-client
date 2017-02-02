import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ReplaySubject, Observable} from 'rxjs'
import {Show} from '../interfaces'
import {UserService} from './user.service'
//import 'rxjs/add/operator/catch'

@Injectable()
export class TvtrackerService {
  _url = 'http://192.168.1.52:8080'
  _shows: ReplaySubject<Show[]> = new ReplaySubject()

  constructor(
    private _http: Http,
    private _userService: UserService
  ) {
    
    this._userService.getTokenObserver()
      .filter(token => token != null)
      .flatMap(() => this.getSubscribedShows())
      .subscribe(shows => this._shows.next(shows))
  }

  subscribedShows(): ReplaySubject<Show[]> {
    return this._shows
  }
  
  getSubscribedShows(): Observable<Show[]> {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', token)

    return this._http.get(this._url + '/subscribed', {headers: headers})
      .map(res => res.json().shows)
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
