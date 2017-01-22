import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TvtrackerService {
  _url = 'http://192.168.1.52:8080'

  constructor(private _http: Http) { }

  subscribedShows() {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', token)

    return this._http.get(this._url + '/subscribed', {headers: headers})
      .map(res => res.json().shows)
  }

  subscribe(tvmazeId: number, name: string) {
    let token = localStorage.getItem('Authorization')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', token)

    return this._http.post(
      this._url + '/subscribe',
      'tvmazeId=' + tvmazeId + '&showName=' + name,
      {headers: headers}
    )
      .map(res => res.json())
  }
}
