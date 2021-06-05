import { MedicineService } from './../../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-med-reservation',
  templateUrl: './med-reservation.component.html',
  styleUrls: ['./med-reservation.component.css']
})
export class MedReservationComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacyMedicamentId: any;
  public user: any;
  public pharmacyMedicament = [] as any;
  public id: any;
  res = false;
  constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute, private medicineService: MedicineService ) { }

  ngOnInit(): void {
    this.setupUser();
    this.validateForm = this.fb.group({
      pickDate: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  submitForm(): void{
    this.id = this.route.snapshot.params.id;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      pickDate: this.validateForm.value.pickDate,
      pharmacyMedId: this.id,
      patientId: this.user.userResponse.id
    }
    console.log("pozivam srvs")
    console.log(body);
    this.medicineService.reserveMed(this.id, body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
        this.res = false;
    })
  }

}
