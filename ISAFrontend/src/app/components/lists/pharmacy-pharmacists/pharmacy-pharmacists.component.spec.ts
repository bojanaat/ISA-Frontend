import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPharmacistsComponent } from './pharmacy-pharmacists.component';

describe('PharmacyPharmacistsComponent', () => {
  let component: PharmacyPharmacistsComponent;
  let fixture: ComponentFixture<PharmacyPharmacistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyPharmacistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyPharmacistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
