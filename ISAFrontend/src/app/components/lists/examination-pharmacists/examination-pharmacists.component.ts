import { RatingService } from './../../../services/rating.service';
import { ExaminationsService } from './../../../services/examinations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-examination-pharmacists',
  templateUrl: './examination-pharmacists.component.html',
  styleUrls: ['./examination-pharmacists.component.css']
})

export class ExaminationPharmacistsComponent implements OnInit {

  public id: any;
  public active: any;
  public dropped = [] as any;


  tooltips = ['1', '2', '3', '4', '5'];
  ratingsPharmacist = [] as any;
  ratingsPharmacy = [] as any;


  constructor(private ratingService: RatingService, private examinationService: ExaminationsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getActive();
    this.getDropped();
  }

  private getActive(): void {
    this.id = this.route.snapshot.params.id;
    this.examinationService.getPharmExActive(this.id).subscribe(data =>{
      console.log("Uspeo");
      this.active = data;
      console.log(data);
     }, error => {
         console.log("Nisam uspeo");
     })

  }

  cancelReservation(id): void {
    this.examinationService.cancelReservation(id).subscribe(data =>{
      console.log("Uspeo");
      console.log(data);
      location.reload();
     }, error => {
         console.log("Nisam uspeo");
     })
  }

  private getDropped(): void {
    this.id = this.route.snapshot.params.id;
    this.examinationService.getPharmExDropped(this.id).subscribe(data =>{
      data.forEach(appointment => {
        console.log(appointment)
      
        this.dropped.push(appointment);
        let ratingPharmacist = {
          pharmacistId: appointment.shiftPharmacistResponse.pharmacistResponse.id,
          appId: appointment.id,
          value: 0,
          done: false
        }
        let ratingPharmacy = {
          pharmacyId: appointment.shiftPharmacistResponse.pharmacyResponse.id,
          pharmacistId: appointment.shiftPharmacistResponse.pharmacistResponse.id,
          appId: appointment.id,
          value: 0,
          done: false
        }
        console.log(ratingPharmacist);
        console.log(ratingPharmacy);
        console.log("Ovo su dropovani app");
        this.ratingsPharmacist.push(ratingPharmacist);
        this.ratingsPharmacy.push(ratingPharmacy);
       
        
      });
      
      console.log("Uspeo");
      console.log(data);
     }, error => {
         console.log("Nisam uspeo");
     })
    }


    ratePharmacist(pharmacistId, appId): void {
      console.log(pharmacistId);
    
      let grade;
      this.ratingsPharmacist.forEach(rating => {
        if(pharmacistId === rating.pharmacistId){
          if(appId === rating.appId){
            grade = rating.value;
            console.log("Rating");
  
            console.log(rating);
            rating.done = true;
          }
          
        }
      });
      let body = {
        id: pharmacistId,
        grade: grade
      }
      console.log(body);
      this.ratingService.ratePharmacist(body).subscribe(data => {
        
        console.log("Uspesno");
       
      }, error => {
      })
    }
  
    complaintPharmacist(id, pharmacyId): void {
      localStorage.setItem('pharmacyId', JSON.stringify(pharmacyId));
      this.router.navigateByUrl(`home-page/new-complaint-pharmacy/${id}`);
    }
  
    complaintPharmacy(id): void {
      this.router.navigateByUrl(`home-page/new-complaint-pharmacy/${id}`);
    }
  
    ratePharmacy(pharmacyId, pharmacistId, appId): void {
      let grade;
      this.ratingsPharmacy.forEach(rating => {
        if(pharmacyId === rating.pharmacyId){
          if(pharmacistId === rating.pharmacistId){
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
}
