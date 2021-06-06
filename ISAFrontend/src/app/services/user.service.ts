import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public updatePatient(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/patients/${id}/patient`, body);
  }

  public updateSupplier(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/suppliers/${id}/supplier`, body);
  }

  public getPatient(id): Observable<any> {
    return this.http.get(`http://localhost:8092/patients/${id}/patient`);
  }

  public getSupplier(id): Observable<any> {
    return this.http.get(`http://localhost:8092/suppliers/${id}/supplier`);
  }

  public getPharmacist(id): Observable<any> {
    return this.http.get(`http://localhost:8092/pharmacist/${id}/pharmacy`);
  }

}

