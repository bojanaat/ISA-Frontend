import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsService {

  constructor(private http: HttpClient) { }

  public getDermExDropped(id): Observable<any> {
    return this.http.get(`http://localhost:8092/examination-dermatologist/dropped/${id}/patient`);
  }
  public getDermExActive(id): Observable<any> {
    return this.http.get(`http://localhost:8092/examination-dermatologist/active/${id}/patient`);
  }
  public getPharmExActive(id): Observable<any> {
    return this.http.get(`http://localhost:8092/examination-pharmacist/active/${id}/patient`);
  }
  public getPharmExDropped(id): Observable<any> {
    return this.http.get(`http://localhost:8092/examination-pharmacist/dropped/${id}/patient`);
  }

  public cancelReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8092/examination-pharmacist/cancel`, body);
  }

  public cancelDermReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8092/examination-dermatologist/cancel`, body);
  }
}
