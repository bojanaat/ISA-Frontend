import { ActionService } from './../../../services/action.service';
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
  public user: any;

  constructor(private pharmacyService: PharmacyService, private router: Router, private actionService: ActionService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPharmacies();
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

  medicines(id): void {
    this.router.navigate([`home-page/pharmacy-medicines/${id}`]);
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
