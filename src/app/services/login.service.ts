import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getDetails(): Observable<any> {
    const url = "http://localhost:3000/login";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }
}
