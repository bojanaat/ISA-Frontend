import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintPharmacyComponent } from './new-complaint-pharmacy.component';

describe('NewComplaintPharmacyComponent', () => {
  let component: NewComplaintPharmacyComponent;
  let fixture: ComponentFixture<NewComplaintPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComplaintPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplaintPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
