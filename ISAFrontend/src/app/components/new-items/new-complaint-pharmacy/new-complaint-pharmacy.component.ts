import { ComplaintService } from './../../../services/complaint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-new-complaint-pharmacy',
  templateUrl: './new-complaint-pharmacy.component.html',
  styleUrls: ['./new-complaint-pharmacy.component.css']
})
export class NewComplaintPharmacyComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;
  public pharmacyId: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) { }

  ngOnInit(): void {

    this.setupUser();
    this.setPharmacyId();

    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  private setPharmacyId(): void {
    this.pharmacyId = this.route.snapshot.params.id;
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
      pharmacyId: this.pharmacyId,
      patientId: this.user.userResponse.id,
    }
    this.complaintService.createComplaintPharmacy(body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
    })
  }

}
