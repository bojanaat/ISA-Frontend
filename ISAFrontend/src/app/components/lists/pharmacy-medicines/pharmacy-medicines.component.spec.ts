import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMedicinesComponent } from './pharmacy-medicines.component';

describe('PharmacyMedicinesComponent', () => {
  let component: PharmacyMedicinesComponent;
  let fixture: ComponentFixture<PharmacyMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
