import { MedicineService } from './../../../services/medicine.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.css']
})
export class NewMedicineComponent implements OnInit {

  validateForm!: FormGroup;
  medShape: any;
  medicineType: any;

  constructor(private router:Router,private fb: FormBuilder, private medicineService: MedicineService) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      name: this.validateForm.value.name,
      code: this.validateForm.value.code,
      ingredients: this.validateForm.value.ingredients,
      replacementCode: this.validateForm.value.replacementCode,
      manufacturer: this.validateForm.value.manufacturer,
      notes: this.validateForm.value.notes,
      recipe: this.validateForm.value.recipe,
      medicineType: this.medicineType,
      medShape: this.medShape
  }
  console.log(body);
  this.medicineService.createMedicine(body).subscribe(data => {
    
    this.router.navigateByUrl(`home-page`);
    
  }, error => {
  })
}



  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      ingredients: [null, [Validators.required]],
      replacementCode: [null, [Validators.required]],
      manufacturer: [null, [Validators.required]],
      notes: [null, [Validators.required]],
      recipe: [null, [Validators.required]]
    });
  }

}
