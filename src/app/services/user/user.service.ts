import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  //_headers: Headers
  _url: string


  constructor(private http: Http) {

    this._url = 'http://localhost:8080'
  }

  login(email: string, password: string) {
    return this.http.post('${this._url}/login', JSON.stringify({ email: email, password: password }))
      .map(res => {
        let user = res.json()
        return user
      })
  }

  signup(email: string, password: string) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let body = 'email=' + email+ '&password=' + password
    console.log(body)

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

}
