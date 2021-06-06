import { Router } from '@angular/router';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pharmacies-nonauth',
  templateUrl: './pharmacies-nonauth.component.html',
  styleUrls: ['./pharmacies-nonauth.component.css']
})
export class PharmaciesNonauthComponent implements OnInit {

  validateForm!: FormGroup;

  public pharmacies: any;
  public user: any;

  constructor(private fb: FormBuilder, private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPharmacies();

    this.validateForm = this.fb.group({
      name: [""],
      address: [""]
    });
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
     
    })
  }

  search():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      name: this.validateForm.value.name == null ? "" : this.validateForm.value.name,
      address: this.validateForm.value.address == null ? "" : this.validateForm.value.address,
    }
    console.log(data);
    this.pharmacyService.searchPharmacies(data).subscribe(data => {
     this.pharmacies = data.pharmacyResponses;
     console.log(data);
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }

  medicines(id): void {
    this.router.navigate([`home-page/pharmacy-medicines/${id}`]);
  }resetForm(): void {
    this.validateForm.reset();
    this.getAllPharmacies();
  }

  searchMeds(id): void {
    this.router.navigate([`opening-page/meds-nonauth/${id}`]);
  }

}
