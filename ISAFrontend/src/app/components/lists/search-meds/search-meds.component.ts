import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicineService } from './../../../services/medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-meds',
  templateUrl: './search-meds.component.html',
  styleUrls: ['./search-meds.component.css']
})
export class SearchMedsComponent implements OnInit {

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
