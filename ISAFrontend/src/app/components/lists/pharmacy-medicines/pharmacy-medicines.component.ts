import { MedicineService } from './../../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-medicines',
  templateUrl: './pharmacy-medicines.component.html',
  styleUrls: ['./pharmacy-medicines.component.css']
})
export class PharmacyMedicinesComponent implements OnInit {

  public meds: any;
  public id: any;

  constructor(private router: Router, private medicineService: MedicineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPharmacyMedicines();
  }

  private getPharmacyMedicines(): void {
    this.id = this.route.snapshot.params.id;
    this.medicineService.getPharmacyMedicines(this.id).subscribe(data => {
      this.meds = data;
      console.log(data);
    }, error => {
     
    })
  }

  reserve(id): void {
    this.router.navigateByUrl(`home-page/med-reservation/${id}`);
  }
}
