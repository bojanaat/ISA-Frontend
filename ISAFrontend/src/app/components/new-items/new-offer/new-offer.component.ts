import { logging } from 'protractor';
import { OfferService } from './../../../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  validateForm!: FormGroup;
  private orderId: any;
  private user: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
    this.setOrder();
    this.setupUser();

    this.validateForm = this.fb.group({
      pickDate: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
  }

  private setOrder(): void {
    this.orderId = this.route.snapshot.params.id;
    console.log(this.orderId);
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
    console.log(this.validateForm.value);
    
    const body = {
      totalPrice: this.validateForm.value.price,
      deadLine: this.validateForm.value.pickDate,
      orderId: this.orderId,
      supplierId: this.user.userResponse.id
    }
    console.log(body);
    console.log("bodic")
    this.offerService.createOffer(body).subscribe(data =>{
     console.log("Uspeo");
     this.router.navigateByUrl(`home-page`);
    }, error => {
        console.log("Nisam uspeo");
    })
  }

}
