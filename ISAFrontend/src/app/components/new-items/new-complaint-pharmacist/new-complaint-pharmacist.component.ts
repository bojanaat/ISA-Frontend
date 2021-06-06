import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-new-complaint-pharmacist',
  templateUrl: './new-complaint-pharmacist.component.html',
  styleUrls: ['./new-complaint-pharmacist.component.css']
})
export class NewComplaintPharmacistComponent implements OnInit {

  
  validateForm!: FormGroup;
  public user: any;
  public pharmacistId: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) { }

  ngOnInit(): void {

    this.setupUser();
    this.setPharmacist();

    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  private setPharmacist(): void {
    this.pharmacistId = this.route.snapshot.params.id;
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
      pharmacistId: this.pharmacistId,
      //ubaciti pharmacy
      patientId: this.user.userResponse.id,
    }
    this.complaintService.createComplaintPharmacist(body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
    })
  }

}
