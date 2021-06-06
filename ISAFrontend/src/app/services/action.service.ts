import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  public getSubscriberPharmacies(id): Observable<any> {
    return this.http.get(`http://localhost:8092/action/${id}/subscribed-patient`);
  }

  public subscribePatient(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/action/subscribe/${id}/patient`, body);
  }

  public cancelSubscription(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/action/cancel/${id}/patient`, body);
  }
}
