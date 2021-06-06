import { logging } from 'protractor';
import { Router } from '@angular/router';
import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  public pharmacyComplaints: any;

  constructor(private complaintService: ComplaintService, private router: Router) { }

  ngOnInit(): void {
    this.setupPharmacyComplaints();
  }

  setupPharmacyComplaints(): void{
    this.complaintService.getAllPharmacyComplaints().subscribe(data =>{
      this.pharmacyComplaints = data;
      console.log(data);
    })
  }

  answer(pharmacyComplaintId, patientId): void{
    console.log("usao u answer");
    localStorage.setItem('patientId', JSON.stringify(patientId));
    localStorage.setItem('pharmacyComplaintId', JSON.stringify(pharmacyComplaintId));
    this.router.navigateByUrl(`home-page/new-answer-complaint`);
  }

}
