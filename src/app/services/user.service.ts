import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  //_headers: Headers
  _url: string
  _token: string


  constructor(private http: Http, private router: Router) {
    this._url = 'http://192.168.1.52:8080'
    let token = localStorage.getItem('Authorization')
    this._token = token ? token : null
  }

  login(email: string, password: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = 'email=' + email+ '&password=' + password

    return this.http.post(
      this._url + '/login',
      body,
      { headers: headers }
    )
      .map(res => {
        let token = res.json().token
        if(token) {
          this._token = token
          localStorage.setItem('Authorization', token)
          return true
        }
        return false
      })
  }

  signup(email: string, password: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = 'email=' + email+ '&password=' + password

    return this.http.post(
      'http://localhost:8080/signup',
      body,
      { headers: headers }
    )
      .map(res => {
        let user = res.json()
        //return user
      })
  }

  logout() {
    this._token = null
    localStorage.removeItem('Authorization')
  }

  isAuthenticated() {
    return this._token ? true : false
  }

}
