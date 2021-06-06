import { Router } from '@angular/router';
import { MedicineService } from './../../../services/medicine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserved-meds',
  templateUrl: './reserved-meds.component.html',
  styleUrls: ['./reserved-meds.component.css']
})
export class ReservedMedsComponent implements OnInit {

  public meds: any;
  public user: any;
  public droppedMeds: any;

  constructor(private router: Router, private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getActiveMeds();
    this.getDroppedMeds();
  }

  
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(this.user);
  } 

  cancel(id): void{
    const body = {
      id: id
    }
    console.log(id);
    this.medicineService.cancelMedReservation(body).subscribe(data =>{
      location.reload();
     }, error => {
         console.log("Nisam uspeo");
     })

  }

  private getActiveMeds(): void {
    this.medicineService.getActiveReservedMeds(this.user.userResponse.id).subscribe(data =>{
      console.log("Uspeo");
      this.meds = data;
      console.log(data);
     }, error => {
         console.log("Nisam uspeo");
     })

  }
  private getDroppedMeds(): void {
    this.medicineService.getDropped(this.user.userResponse.id).subscribe(data =>{
      console.log("Uspeo");
      this.droppedMeds = data;
      console.log(data);
     }, error => {
         console.log("Nisam uspeo");
     })

  }

  complaint(id): void {
    this.router.navigate([`home-page/new-complaint-pharmacy/${id}`]);
  }

}
