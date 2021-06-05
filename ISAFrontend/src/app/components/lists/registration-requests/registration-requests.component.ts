import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  public pendingRequests = [];
  public noPendingRequests = false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllPendingRequests();
  }

  private getAllPendingRequests(): void {
    this.authService.getAllPendingRequests().subscribe(data => {
      this.pendingRequests = data;
      console.log(data);
      if(this.pendingRequests.length === 0){
        this.noPendingRequests = true;
      }
    }, error => {
      
    })
  }

  public accept(id): void {
    const body = {
      patientId: id
    }
    console.log(body);
    this.authService.approveRegistrationRequest(body).subscribe(data =>{
    location.reload();
    })
  }

  public deny(id): void {
    const body = {
      message: "Your registration request has been denied!"
    }
    this.authService.denyRegistrationRequest(id, body).subscribe(data =>{
      location.reload();
    })
  }

}
