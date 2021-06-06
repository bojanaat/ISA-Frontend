import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getAllMedicines(): Observable<any> {
    return this.http.get('http://localhost:8092/meds');
  }

  public getAllMedsByOrderId(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/${id}/order`);
  }

  public getMedicamentPatientIsNotAllergic(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/patient/${id}/not/allergic`);
  }

  public getPharmacyMedicines(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/${id}/pharmacy`);
  }


  public getActiveReservedMeds(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/${id}/reserved-active-medicines`);
  }

  public getDropped(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/${id}/reserved-dropped-medicines`);
  }


  public cancelMedReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8092/meds/cancel-reservation`, body);
  }

  public addNewAlergy(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/meds/${id}/alergies`, body);
  }

  public reserveMed(id, body): Observable<any> {
    return this.http.put(`http://localhost:8092/meds/${id}/pharmacy-medicament`, body);
  }

  public getAllMedicamentsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8092/meds/${id}/pharmacy`);
  }

  public searchPharmacyMedicaments(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('name', data["name"])
                               .set('pharmacyId', data["pharmacyId"])
    } 
    return this.http.get(`http://localhost:8092/search/pharmacy-meds`, queryParams);
  }
}
