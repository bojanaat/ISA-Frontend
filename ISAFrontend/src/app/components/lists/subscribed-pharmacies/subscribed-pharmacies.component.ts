import { Router } from '@angular/router';
import { ActionService } from './../../../services/action.service';
import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-subscribed-pharmacies',
  templateUrl: './subscribed-pharmacies.component.html',
  styleUrls: ['./subscribed-pharmacies.component.css']
})
export class SubscribedPharmaciesComponent implements OnInit {

  public pharmacies: any;
  public user: any;

  constructor(private actionService: ActionService, private router: Router) { }

  ngOnInit(): void {
    this.setupUser();
    this.getSubscribedPharmacies();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(this.user.userResponse.userType);
  } 

  private getSubscribedPharmacies(): void {
    this.actionService.getSubscriberPharmacies(this.user.userResponse.id).subscribe(data => {
      this.pharmacies = data;
      console.log(data);
    }, error => {
     
    })
  }

  cancel(id): void {
    const body = {
      id: id
    }
    this.actionService.cancelSubscription(this.user.userResponse.id, body).subscribe(data => {
      this.pharmacies = data;
      location.reload();
      console.log(data);
    }, error => {
     
    })
  }


}
