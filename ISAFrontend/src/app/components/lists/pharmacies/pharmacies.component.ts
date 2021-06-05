import { Router } from '@angular/router';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {

  public pharmacies: any;

  constructor(private pharmacyService: PharmacyService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPharmacies();
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
     
    })
  }

  medicines(id): void {
    this.router.navigate([`home-page/pharmacy-medicines/${id}`]);
  }



}
