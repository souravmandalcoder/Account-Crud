import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = 'http://localhost:5000/api/login'

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token') // double negate the statement which will always return boolean value
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

}
