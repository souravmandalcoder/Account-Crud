import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<any> {
    const url = "http://localhost:3000/purchases";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }

  deletePurchases(id: number): Observable<any> {
    const url = "http://localhost:3000/purchases/" + id;
    return this.http.delete(url).pipe(
      map(res => {
        return res
      })
    )
  }

  addPurchases(newSales: any): Observable<any> {
    const url = "http://localhost:3000/purchases/";
    return this.http.post(url, newSales).pipe(
      map(res => {
        return res
      })
    )
  }

  updatePurchases(data: any): Observable<any> {
    const url = "http://localhost:3000/purchases/" + data.id;
    return this.http.put(url, data).pipe(
      map(res => {
        return res
      })
    )
  }

}
