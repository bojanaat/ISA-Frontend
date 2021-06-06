import { ComplaintService } from './../../../services/complaint.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-complaint-dermatologist',
  templateUrl: './new-complaint-dermatologist.component.html',
  styleUrls: ['./new-complaint-dermatologist.component.css']
})
export class NewComplaintDermatologistComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;
  public dermatologistId: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) { }

  ngOnInit(): void {

    this.setupUser();
    this.setDermatologist();

    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  private setDermatologist(): void {
    this.dermatologistId = this.route.snapshot.params.id;
  } 

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  } 



  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    
    const body = {
      text: this.validateForm.value.text,
      dermatologistId: this.dermatologistId,
      //ubaciti pharmacy
      patientId: this.user.userResponse.id,
    }
    this.complaintService.createComplaintDermatologist(body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
    })
  }

}
