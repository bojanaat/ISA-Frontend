import { NewConsultationComponent } from './components/new-items/new-consultation/new-consultation.component';
import { PharmacyPharmacistsComponent } from './components/lists/pharmacy-pharmacists/pharmacy-pharmacists.component';
import { DermatologistExaminationsComponent } from './components/lists/dermatologist-examinations/dermatologist-examinations.component';
import { MedsNonauthComponent } from './components/lists/meds-nonauth/meds-nonauth.component';
import { PharmaciesNonauthComponent } from './components/lists/pharmacies-nonauth/pharmacies-nonauth.component';
import { ExaminationPharmacistsComponent } from './components/lists/examination-pharmacists/examination-pharmacists.component';
import { ExaminationDermatologistsComponent } from './components/lists/examination-dermatologists/examination-dermatologists.component';
import { NewAnswerComplaintComponent } from './components/new-items/new-answer-complaint/new-answer-complaint.component';
import { NewComplaintPharmacyComponent } from './components/new-items/new-complaint-pharmacy/new-complaint-pharmacy.component';
import { NewComplaintPharmacistComponent } from './components/new-items/new-complaint-pharmacist/new-complaint-pharmacist.component';
import { NewOfferComponent } from './components/new-items/new-offer/new-offer.component';
import { OrdersComponent } from './components/lists/orders/orders.component';
import { PharmacyProfileComponent } from './components/pharmacy-profile/pharmacy-profile.component';
import { ReservedMedsComponent } from './components/lists/reserved-meds/reserved-meds.component';
import { MedReservationComponent } from './components/new-items/med-reservation/med-reservation.component';
import { PharmacyMedicinesComponent } from './components/lists/pharmacy-medicines/pharmacy-medicines.component';
import { PatientProfileComponent } from './components/updates/patient-profile/patient-profile.component';
import { NewAllergyComponent } from './components/new-items/new-allergy/new-allergy.component';
import { SubscribedPharmaciesComponent } from './components/lists/subscribed-pharmacies/subscribed-pharmacies.component';
import { SearchMedsComponent } from './components/lists/search-meds/search-meds.component';
import { NewPurchaseOrderComponent } from './components/new-items/new-purchase-order/new-purchase-order.component';
import { SupplierProfileComponent } from './components/updates/supplier-profile/supplier-profile.component';
import { OffersComponent } from './components/lists/offers/offers.component';
import { SystemAdminProfileComponent } from './components/updates/system-admin-profile/system-admin-profile.component';
import { NewSystemAdminComponent } from './components/new-items/new-system-admin/new-system-admin.component';
import { NewSupplierComponent } from './components/new-items/new-supplier/new-supplier.component';
import { NewMedicineComponent } from './components/new-items/new-medicine/new-medicine.component';
import { NewLoyaltyProgramComponent } from './components/new-items/new-loyalty-program/new-loyalty-program.component';
import { NewDermatologistComponent } from './components/new-items/new-dermatologist/new-dermatologist.component';
import { RegistrationRequestsComponent } from './components/lists/registration-requests/registration-requests.component';
import { PharmaciesComponent } from './components/lists/pharmacies/pharmacies.component';
import { ComplaintsComponent } from './components/lists/complaints/complaints.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPharmacyComponent } from './components/new-items/new-pharmacy/new-pharmacy.component';
import { NewComplaintDermatologistComponent } from './components/new-items/new-complaint-dermatologist/new-complaint-dermatologist.component';
import { PasswordPatientComponent } from './components/updates/password-patient/password-patient.component';
import { PasswordSupplierComponent } from './components/updates/password-supplier/password-supplier.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    OpeningPageComponent,
    HomePageComponent,
    ComplaintsComponent,
    PharmaciesComponent,
    RegistrationRequestsComponent,
    NewDermatologistComponent,
    NewLoyaltyProgramComponent,
    NewMedicineComponent,
    NewSupplierComponent,
    NewPharmacyComponent,
    NewSystemAdminComponent,
    SystemAdminProfileComponent,
    OffersComponent,
    SupplierProfileComponent,
    NewPurchaseOrderComponent,
    SearchMedsComponent,
    SubscribedPharmaciesComponent,
    NewAllergyComponent,
    PatientProfileComponent,
    PharmacyMedicinesComponent,
    MedReservationComponent,
    ReservedMedsComponent,
    PharmacyProfileComponent,
    OrdersComponent,
    NewOfferComponent,
    NewComplaintPharmacistComponent,
    NewComplaintPharmacyComponent,
    NewComplaintDermatologistComponent,
    NewAnswerComplaintComponent,
    ExaminationDermatologistsComponent,
    ExaminationPharmacistsComponent,
    PasswordPatientComponent,
    PasswordSupplierComponent,
    PharmaciesNonauthComponent,
    MedsNonauthComponent,
    DermatologistExaminationsComponent,
    PharmacyPharmacistsComponent,
    NewConsultationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
