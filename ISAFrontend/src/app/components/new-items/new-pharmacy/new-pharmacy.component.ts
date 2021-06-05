import { PharmacyService } from './../../../services/pharmacy.service';
import { AuthService } from './../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-pharmacy',
  templateUrl: './new-pharmacy.component.html',
  styleUrls: ['./new-pharmacy.component.css']
})
export class NewPharmacyComponent implements OnInit {

  validateForm!: FormGroup;
  pharmacy: any;

  constructor(private route: ActivatedRoute, private router:Router,private fb: FormBuilder, private authService: AuthService, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      about: [null, [Validators.required]],
      address: [null, [Validators.required]],
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm(): void{
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      name: this.validateForm.value.name,
      description: this.validateForm.value.about,
      address:this.validateForm.value.address
    }

    this.pharmacyService.createPharmacy(body).subscribe(data =>{
      this.pharmacy = data;
      console.log(data);
      const bodyAdmin = {
        email: this.validateForm.value.username,
        password: this.validateForm.value.password,
        rePassword: this.validateForm.value.rePassword,
        firstName: this.validateForm.value.firstName,
        lastName: this.validateForm.value.lastName,
        pharmacyId: data.id
      }
      this.authService.registerPharmacyAdmin(bodyAdmin).subscribe(data =>{
        this.router.navigateByUrl(`home-page`);
      })
    })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

}
