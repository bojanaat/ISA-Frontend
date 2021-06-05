import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http: HttpClient) { }

  public createPharmacy(body): Observable<any> {
    return this.http.post('http://localhost:8092/pharmacies', body);
  }
}
