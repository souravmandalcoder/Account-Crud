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

  deleteSales(id: number): Observable<any> {
    const url = "http://localhost:3000/sales/" + id;
    return this.http.delete(url).pipe(
      map(res => {
        return res
      })
    )
  }

  newSales(newSales: any): Observable<any> {
    const url = "http://localhost:3000/sales/";
    return this.http.post(url, newSales).pipe(
      map(res => {
        return res
      })
    )
  }



  updateSales(data: any): Observable<any> {
    const url = "http://localhost:3000/sales/" + data.id;
    return this.http.put(url, data).pipe(
      map(res => {
        return res
      })
    )
  }
}



