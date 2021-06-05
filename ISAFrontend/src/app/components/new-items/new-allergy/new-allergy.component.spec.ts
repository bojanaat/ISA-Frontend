import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAllergyComponent } from './new-allergy.component';

describe('NewAllergyComponent', () => {
  let component: NewAllergyComponent;
  let fixture: ComponentFixture<NewAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAllergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
