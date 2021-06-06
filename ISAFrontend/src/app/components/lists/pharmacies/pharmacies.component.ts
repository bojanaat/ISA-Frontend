import { ActionService } from './../../../services/action.service';
import { Router } from '@angular/router';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {

  validateForm!: FormGroup;

  public pharmacies: any;
  public user: any;

  constructor(private fb: FormBuilder, private pharmacyService: PharmacyService, private router: Router, private actionService: ActionService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPharmacies();

    this.validateForm = this.fb.group({
      name: [""],
      address: [""]
    });
  }

  
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(this.user.userResponse.userType);
  } 


  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
     
    })
  }

  dermatologists(id): void {
    this.router.navigate([`home-page/dermatologist-examinations/${id}`]);
  }

   pharmacists(id): void {
    this.router.navigate([`home-page/pharmacy-pharmacists/${id}`]);
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
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllPharmacies();
  }

  searchMeds(id): void {
    this.router.navigate([`home-page/search-meds/${id}`]);
  }

  subscribe(id): void {
    const body = {
      id: id
    }
    this.actionService.subscribePatient(this.user.userResponse.id, body).subscribe(data => {
      location.reload();
    }, error => {
     
    })
  }



}
