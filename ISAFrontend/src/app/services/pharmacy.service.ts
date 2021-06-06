import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getAllPharmacies(): Observable<any> {
    return this.http.get('http://localhost:8092/pharmacies');
  }

  public searchPharmacies(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('name', data["name"])
                               .set('city', data["address"])
    } 
    return this.http.get(`http://localhost:8092/search/pharmacies`, queryParams);
  }
}
