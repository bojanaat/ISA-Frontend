import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  public createMedicine(body): Observable<any> {
    return this.http.post('http://localhost:8092/meds/create', body);
  }
}
