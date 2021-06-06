import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-supplier',
  templateUrl: './password-supplier.component.html',
  styleUrls: ['./password-supplier.component.css']
})
export class PasswordSupplierComponent implements OnInit {

   
  public user: any;
  validateForm!: FormGroup;
  public alert = false;
 
  constructor(private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      pass: this.validateForm.value.oldPassword,
      newPass: this.validateForm.value.password,
      rePass: this.validateForm.value.rePassword
  }
  this.authService.changePassSupplier(this.user.userResponse.id, body).subscribe(data => {
   this.alert = true;
    this.router.navigateByUrl(`home-page`);
    
  }, error => {
    console.log(error);
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

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  

  ngOnInit(): void {
    this.setupUser();
    this.validateForm = this.fb.group({
      oldPassword: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 



}
