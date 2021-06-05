import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public patient: boolean = true;
  public dermatologist: boolean = false;
  public pharmacist: boolean = false;
  public systemAdmin: boolean = false;
  public pharmacyAdmin: boolean = false;
  public supplier: boolean = false;
  public user: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //SYSTEM ADMIN
  newDermatologist(): void {
    this.router.navigateByUrl(`home-page/new-dermatologist`);
  }

  newPharmacy(): void {
    this.router.navigate(['home-page/new-pharmacy']);
  }

  newSystemAdmin(): void {
    this.router.navigate([`home-page/new-system-admin`]);
  }

  newMedicine(): void {
    this.router.navigate([`home-page/new-medicine`]);
  }

  newLoyaltyProgram(): void{
    this.router.navigate([`home-page/new-loyalty-program`]);
  }

  newSupplier(): void{
    this.router.navigate([`home-page/new-supplier`]);
  }

  rr(): void {
    this.router.navigate([`home-page/registration-requests`]);
  }

  complaints(): void {
    this.router.navigate([`home-page/complaints`]);
  }

  pharmacies(): void{
    this.router.navigate([`home-page/pharmacies`]);
  }

  changeProfile(): void{
    this.router.navigate([`home-page/system-admin-profile`]);
  }

//SUPPLIER
  supplierProfile(): void {
    this.router.navigate([`home-page/supplier-profile`]);
  }

  seeOffers(): void{
    this.router.navigate([`home-page/offers`]);
  }

  createPurchaseOrder(): void{
    this.router.navigate([`home-page/new-purchase-order`]);
  }


  //PATIENT

  patientProfile(): void {
    this.router.navigate([`home-page/patient-profile`]);
  }

  allergy(): void {
    this.router.navigate([`home-page/new-medicine`]);
  }

  consultation(): void{
    this.router.navigate([`home-page/new-loyalty-program`]);
  }

  subscribedPharmacies(): void {
    this.router.navigate([`home-page/subscribed-pharmacies`]);
  }

  searchMeds(): void {
    this.router.navigate([`home-page/search-meds`]);
  }

}
