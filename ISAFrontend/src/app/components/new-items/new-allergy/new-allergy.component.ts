import { MedicineService } from './../../../services/medicine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-allergy',
  templateUrl: './new-allergy.component.html',
  styleUrls: ['./new-allergy.component.css']
})
export class NewAllergyComponent implements OnInit {

  public user: any;
  public meds: any;

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getMedicamentPatientIsNotAllergic();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getMedicamentPatientIsNotAllergic(): void {

    
   
    this.medicineService.getMedicamentPatientIsNotAllergic( this.user.userResponse.id).subscribe(data => {
      this.meds = data;
      console.log(this.meds);
    }, error => {
     
    })
  }

   add(id): void{
    this.medicineService.addNewAlergy( this.user.userResponse.id, id).subscribe(data => {
      this.meds = data;
      location.reload();
      console.log(this.meds);
    }, error => {
     
    })
  }

}
