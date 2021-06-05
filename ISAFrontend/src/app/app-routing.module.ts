import { NewAllergyComponent } from './components/new-items/new-allergy/new-allergy.component';
import { SearchMedsComponent } from './components/lists/search-meds/search-meds.component';
import { SubscribedPharmaciesComponent } from './components/lists/subscribed-pharmacies/subscribed-pharmacies.component';
import { PatientProfileComponent } from './components/updates/patient-profile/patient-profile.component';
import { OffersComponent } from './components/lists/offers/offers.component';
import { NewPurchaseOrderComponent } from './components/new-items/new-purchase-order/new-purchase-order.component';
import { SupplierProfileComponent } from './components/updates/supplier-profile/supplier-profile.component';
import { NewSystemAdminComponent } from './components/new-items/new-system-admin/new-system-admin.component';
import { NewSupplierComponent } from './components/new-items/new-supplier/new-supplier.component';
import { NewMedicineComponent } from './components/new-items/new-medicine/new-medicine.component';
import { NewLoyaltyProgramComponent } from './components/new-items/new-loyalty-program/new-loyalty-program.component';
import { NewDermatologistComponent } from './components/new-items/new-dermatologist/new-dermatologist.component';
import { SystemAdminProfileComponent } from './components/updates/system-admin-profile/system-admin-profile.component';
import { RegistrationRequestsComponent } from './components/lists/registration-requests/registration-requests.component';
import { PharmaciesComponent } from './components/lists/pharmacies/pharmacies.component';
import { ComplaintsComponent } from './components/lists/complaints/complaints.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { OpeningPageComponent } from './components/opening-page/opening-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPharmacyComponent } from './components/new-items/new-pharmacy/new-pharmacy.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'opening-page'},
  {path: 'opening-page', component:OpeningPageComponent, children: [
    {path: 'registration-form', component: RegistrationFormComponent},
    {path: 'login-form', component: LoginFormComponent}
  ]},
  {path: 'home-page', component:HomePageComponent, children: [
    //lists
    {path: 'complaints', component: ComplaintsComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'pharmacies', component: PharmaciesComponent},
    {path: 'registration-requests', component: RegistrationRequestsComponent},
    {path: 'search-meds', component: SearchMedsComponent},
    {path: 'subscribed-pharmacies', component: SubscribedPharmaciesComponent},
    //updates
    {path: 'system-admin-profile', component: SystemAdminProfileComponent},
    {path: 'supplier-profile', component: SupplierProfileComponent},
    {path: 'patient-profile', component: PatientProfileComponent},
    //new items
    {path: 'new-dermatologist', component: NewDermatologistComponent},
    {path: 'new-loyalty-program', component: NewLoyaltyProgramComponent},
    {path: 'new-medicine', component: NewMedicineComponent},
    {path: 'new-pharmacy', component: NewPharmacyComponent},
    {path: 'new-supplier', component: NewSupplierComponent},
    {path: 'new-system-admin', component: NewSystemAdminComponent},
    {path: 'new-purchase-order', component: NewPurchaseOrderComponent},
    {path: 'new-allergy', component: NewAllergyComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
