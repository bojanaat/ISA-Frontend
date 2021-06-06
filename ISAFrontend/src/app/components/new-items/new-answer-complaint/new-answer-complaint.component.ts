import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-answer-complaint',
  templateUrl: './new-answer-complaint.component.html',
  styleUrls: ['./new-answer-complaint.component.css']
})
export class NewAnswerComplaintComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;
  public patientId: any;
  public complaintId: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) { }

  ngOnInit(): void {

    this.setupUser();

    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.patientId = JSON.parse(localStorage.getItem('patientId'));
    this.complaintId = JSON.parse(localStorage.getItem('pharmacyComplaintId'));
  } 



  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    
    const body = {
      text: this.validateForm.value.text,
      patientId: this.patientId,
      //ubaciti pharmacy
      complaintId: this.complaintId
    }
    this.complaintService.answerOnComplaint(body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
    })
  }
}
