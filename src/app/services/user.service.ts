import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {ReplaySubject, Observable} from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable()
export class UserService {
  _url: string
  _tokenObserver: ReplaySubject<string> = new ReplaySubject<string>()


  constructor(
    private _http: Http
  ) {
    this._url = environment.api_url
    let token = localStorage.getItem('Authorization')
    this._tokenObserver.next(token)
  }

  login(email: string, password: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = 'email=' + email+ '&password=' + password

    return this._http.post(
      this._url + '/login',
      body,
      { headers: headers }
    )
      .flatMap(res => {
        if(res.json().error) {
          return Observable.throw(res.json().error)
        }
        
        let token = res.json().token
        if(token) {
          localStorage.setItem('Authorization', token)
          this._tokenObserver.next(token)
        }
        return Observable.generate(res.json())
      })
  }

  signup(email: string, password: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = 'email=' + email+ '&password=' + password

    return this._http.post(
      this._url + '/signup',
      body,
      { headers: headers }
    )
      .flatMap(res => {
        if(res.json().error) {
          return Observable.throw(res.json().error)
        }
        return this.login(email, password)
      })
  }

  logout() {
    this._tokenObserver.next(null)
    localStorage.removeItem('Authorization')
  }

  isAuthenticated() {
    return localStorage.getItem('Authorization') ? true : false
  }
  
  getTokenObserver(): ReplaySubject<string> {
    return this._tokenObserver
  }
  
  checkEmail(email: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
  
    let body = 'email=' + email
  
    return this._http.post(
      this._url + '/checkemail',
      body,
      { headers: headers }
    )
      .map(res => res.json())
  }

}
