import { ExaminationsService } from './../../../services/examinations.service';
import { RatingService } from './../../../services/rating.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-examination-dermatologists',
  templateUrl: './examination-dermatologists.component.html',
  styleUrls: ['./examination-dermatologists.component.css']
})
export class ExaminationDermatologistsComponent implements OnInit {

  public active = [] as any;
  public dropped = [] as any;
  public patientId: any;
  public id: any;
  tooltips = ['1', '2', '3', '4', '5'];
  ratingsDermatologist = [] as any;
  ratingsPharmacy = [] as any;

  constructor(private ratingService: RatingService, private examinationService: ExaminationsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getDropped();
    this.getActive();
    console.log(this.ratingsPharmacy);
    console.log("f");

  }


  private getDropped(): void {
    this.id = this.route.snapshot.params.id;
    this.examinationService.getDermExDropped(this.id).subscribe(data =>{
      data.forEach(appointment => {
        console.log(appointment)
        this.dropped.push(appointment);
        let ratingDermatologist = {
          dermatologistId: appointment.dermatologistResponse.id,
          appId: appointment.id,
          value: 0,
          done: false
        }
        let ratingPharmacy = {
          pharmacyId: appointment.pharmacyResponse.id,
          dermatologistId: appointment.dermatologistResponse.id,
          appId: appointment.id,
          value: 0,
          done: false
        }
        this.ratingsDermatologist.push(ratingDermatologist);
        this.ratingsPharmacy.push(ratingPharmacy);

      });
           console.log("Uspeodata");
      console.log(data);
     }, error => {
         console.log("Nisam uspeo");
     })
    }

    private getActive(): void {
      this.id = this.route.snapshot.params.id;
      this.examinationService.getDermExActive(this.id).subscribe(data =>{
        console.log("Uspeo");
        this.active = data;
       }, error => {
           console.log("Nisam uspeo");
       })
  
    }

    complaintDermatologist(id, pharmacyId): void {
      localStorage.setItem('pharmacyId', JSON.stringify(pharmacyId));
      this.router.navigateByUrl(`home-page/new-complaint-dermatologist/${id}`);
    }
  
    complaintPharmacy(id): void {
      this.router.navigateByUrl(`home-page/new-complaint-pharmacy/${id}`);
    }

    ratePharmacy(pharmacyId, dermatologistId, appId): void {
      let grade;
      this.ratingsPharmacy.forEach(rating => {
        if(pharmacyId === rating.pharmacyId){
          if(dermatologistId === rating.dermatologistId){
            if(appId === rating.appId){
              grade = rating.value;
              rating.done = true;
            }
           
          }
        }
      });
      let body = {
        id: pharmacyId,
        grade: grade
      }
      console.log(body);
  
      this.ratingService.ratePharmacy(body).subscribe(data => {
        console.log("Uspesno");
      }, error => {
        alert("Error");
      })
    }
  

    rateDermatologist(dermatologistId, appId): void {
      console.log(dermatologistId);
      console.log("ovog ratujem")
      let grade;
      this.ratingsDermatologist.forEach(rating => {
        if(dermatologistId === rating.dermatologistId){
          if(appId === rating.appId){
            grade = rating.value;
  
            rating.done = true;
          }
          
        }
      });
      let body = {
        id: dermatologistId,
        grade: grade
      }
      this.ratingService.rateDermatologist(body).subscribe(data => {
             
      }, error => {
      })
    }

    cancel(id): void {
      this.examinationService.cancelDermReservation(id).subscribe(data =>{
        location.reload();
       }, error => {
           console.log("Nisam uspeo");
       })
    }
  

}
