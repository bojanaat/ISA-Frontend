import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologistExaminationsComponent } from './dermatologist-examinations.component';

describe('DermatologistExaminationsComponent', () => {
  let component: DermatologistExaminationsComponent;
  let fixture: ComponentFixture<DermatologistExaminationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologistExaminationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermatologistExaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
