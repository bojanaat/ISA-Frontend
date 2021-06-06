import { MedicineService } from './../../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meds-nonauth',
  templateUrl: './meds-nonauth.component.html',
  styleUrls: ['./meds-nonauth.component.css']
})
export class MedsNonauthComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacyId: any;
  public pharmacyMedicaments = [];



  constructor(private fb:FormBuilder, private route: ActivatedRoute, private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.setUpPharmacy();
    this.getAllMedicamentsByPharmacyId(this.pharmacyId);

    this.validateForm = this.fb.group({
      name: [""]
    });
  }

  private setUpPharmacy(): void {
    this.pharmacyId = this.route.snapshot.params.id;
  } 

  private getAllMedicamentsByPharmacyId(id): void {
    this.medicineService.getAllMedicamentsByPharmacyId(id).subscribe(data => {
      this.pharmacyMedicaments = data;
      console.log(data);

    }, error => {
      alert("Error");
    })
  }

  search():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      name: this.validateForm.value.name == null ? "" : this.validateForm.value.name,
      pharmacyId:  this.pharmacyId
    }
    this.medicineService.searchPharmacyMedicaments(data).subscribe(data => {
     this.pharmacyMedicaments = data.pharmacyMedsResponses;
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllMedicamentsByPharmacyId(this.pharmacyId);
  }


}
