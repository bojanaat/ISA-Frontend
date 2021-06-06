import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintPharmacistComponent } from './new-complaint-pharmacist.component';

describe('NewComplaintPharmacistComponent', () => {
  let component: NewComplaintPharmacistComponent;
  let fixture: ComponentFixture<NewComplaintPharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComplaintPharmacistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplaintPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
