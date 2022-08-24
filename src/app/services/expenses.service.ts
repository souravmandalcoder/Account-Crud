import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }


  getExpenses(): Observable<any> {
    const url = "http://localhost:3000/expenses";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }

  deleteExpenses(id: number): Observable<any> {
    const url = "http://localhost:3000/expenses/" + id;
    return this.http.delete(url).pipe(
      map(res => {
        return res
      })
    )
  }

  newExpenses(newSales: any): Observable<any> {
    const url = "http://localhost:3000/expenses/";
    return this.http.post(url, newSales).pipe(
      map(res => {
        return res
      })
    )
  }

  updateExpenses(data: any): Observable<any> {
    const url = "http://localhost:3000/expenses/" + data.id;
    return this.http.put(url, data).pipe(
      map(res => {
        return res
      })
    )
  }

}
