import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseUrl = 'http://localhost:8080/api/bill'

  constructor(private http: HttpClient) { }

  save(bill: any): Observable<any> {
    return this.http.post(this.baseUrl, bill);
  }

  findAll(uui: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/all/${uui}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  delete(bill: any): Observable<any> {
    return this.http.delete(this.baseUrl, bill);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  update(bill: any): Observable<any> {
    return this.http.put(this.baseUrl, bill);
  }
}
