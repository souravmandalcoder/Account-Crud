import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSales(): Observable<any> {
    const url = "http://localhost:3000/sales";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }

  newSales(newSales: any): Observable<any> {
    const url = "http://localhost:3000/employees/";
    return this.http.post(url, newSales).pipe(
      map(res => {
        return res
      })
    )
  }
}
