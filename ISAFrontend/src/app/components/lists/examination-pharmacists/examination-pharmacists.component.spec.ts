import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationPharmacistsComponent } from './examination-pharmacists.component';

describe('ExaminationPharmacistsComponent', () => {
  let component: ExaminationPharmacistsComponent;
  let fixture: ComponentFixture<ExaminationPharmacistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationPharmacistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationPharmacistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
