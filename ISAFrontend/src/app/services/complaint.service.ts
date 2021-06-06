import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }

  public createComplaintPharmacy(body): Observable<any> {
    return this.http.post('http://localhost:8092/complaints/pharmacy', body);
  }

  public createComplaintDermatologist(body): Observable<any> {
    return this.http.post('http://localhost:8092/complaints/dermatologist', body);
  }

  public createComplaintPharmacist(body): Observable<any> {
    return this.http.post('http://localhost:8092/complaints/pharmacist', body);
  }

  public getAllPharmacyComplaints(): Observable<any> {
    return this.http.get('http://localhost:8092/complaints/pharmacy');
  }

  public getAllPharmacistComplaints(): Observable<any> {
    return this.http.get('http://localhost:8092/complaints/pharmacist');
  }

  public getAllDermatologistComplaints(): Observable<any> {
    return this.http.get('http://localhost:8092/complaints/dermatologist');
  }

  public answerOnComplaint(body): Observable<any> {
    return this.http.put(`http://localhost:8092/complaints/answer`, body);
  }
}
