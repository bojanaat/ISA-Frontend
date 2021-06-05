import { AuthService } from './../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-dermatologist',
  templateUrl: './new-dermatologist.component.html',
  styleUrls: ['./new-dermatologist.component.css']
})
export class NewDermatologistComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private router:Router,private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      number: [null, [Validators.required]],
      city: [null, [Validators.required]],
      country:  [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      email: this.validateForm.value.email,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword,
      address: this.validateForm.value.address,
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,
      city: this.validateForm.value.city,
      country: this.validateForm.value.country,
      number: this.validateForm.value.number,
  }
  console.log(body);
  this.authService.registerDermatologist(body).subscribe(data => {
    this.router.navigateByUrl(`home-page`);
    
  }, error => {
  })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

}
