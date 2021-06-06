import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPatientComponent } from './password-patient.component';

describe('PasswordPatientComponent', () => {
  let component: PasswordPatientComponent;
  let fixture: ComponentFixture<PasswordPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
