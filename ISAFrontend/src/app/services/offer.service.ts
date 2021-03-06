import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  public createOffer(body): Observable<any> {
    return this.http.post('http://localhost:8092/offer', body);
  }

  public getAllOffersBySupplierId(id): Observable<any> {
    return this.http.get(`http://localhost:8092/offer/${id}`);
  }
}
