import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public patient: boolean = false;
  public dermatologist: boolean = false;
  public pharmacist: boolean = false;
  public systemAdmin: boolean = false;
  public pharmacyAdmin: boolean = false;
  public supplier: boolean = false;
  public user: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupUserType();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(this.user.userResponse.userType);
  } 
  
  private setupUserType(): void {
  
    
    if(this.user.userResponse.userType === 'SYSTEM_ADMIN'){
      console.log("Ja sam sistem admin");
      this.systemAdmin = true;
      console.log(this.systemAdmin);
    }else if(this.user.userResponse.userType === 'PHARMACY_ADMIN'){
      this.pharmacyAdmin = true;
    }else if(this.user.userResponse.userType === 'PHARMACIST'){
      this.pharmacist = true;
    }else if(this.user.userResponse.userType === 'DERMATOLOGIST'){
      this.dermatologist = true;
    }else if(this.user.userResponse.userType === 'PATIENT'){
      this.patient = true;
    }else if(this.user.userResponse.userType === 'SUPPLIER'){
      this.supplier = true;
    }
    
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

  seeOrders(): void{
    this.router.navigate([`home-page/orders`]);
  }

  createPurchaseOrder(): void{
    this.router.navigate([`home-page/new-purchase-order`]);
  }


  //PATIENT

  patientProfile(): void {
    this.router.navigate([`home-page/patient-profile`]);
  }

  allergy(): void {
    this.router.navigate([`home-page/new-allergy`]);
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

  reservedMeds(): void {
    this.router.navigate([`home-page/reserved-meds`]);
  }

  dermatologistApp(): void {
    this.router.navigate([`home-page/examination-dermatologists/${this.user.userResponse.id}`]);
  }

  pharmacistApp(): void {
    this.router.navigate([`home-page/examination-pharmacists/${this.user.userResponse.id}`]);
  }

  changePassSupplier(): void {
    this.router.navigate([`home-page/password-supplier/${this.user.userResponse.id}`]);
  }

  changePassPatient(): void {
    this.router.navigate([`home-page/password-patient/${this.user.userResponse.id}`]);
  }


  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('opening-page');
  }

}
