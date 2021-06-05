import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public login(body): Observable<any> {
    return this.http.post(`http://localhost:8092/auth/login`, body);
  }

  public register(body): Observable<any> {
    return this.http.post('http://localhost:8092/auth/create', body);
  }

  public registerPharmacyAdmin(body): Observable<any> {
    return this.http.post('http://localhost:8092/auth/create/pharmacy-admins', body);
  }

  public registerSystemAdmin(body): Observable<any> {
    return this.http.post('http://localhost:8092/auth/create/system-admins', body);
  }


  public registerDermatologist(body): Observable<any> {
    return this.http.post('http://localhost:8092/auth/create/dermatologists', body);
  }

  public registerSupplier(body): Observable<any> {
    return this.http.post('http://localhost:8092/auth/create/suppliers', body);
  }

   public activateRegistration(body): Observable<any> {
    return this.http.put('http://localhost:8092/patients/activate', body);
  }

  public getAllPendingRequests(): Observable<any> {
    return this.http.get('http://localhost:8092/patients/requests');
  }

  public approveRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8092/patients/approve', body);
  }

  public denyRegistrationRequest(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/patients/deny/${id}/request`, body);
  }
}
