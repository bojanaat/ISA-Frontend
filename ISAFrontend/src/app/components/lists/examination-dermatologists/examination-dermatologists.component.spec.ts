import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDermatologistsComponent } from './examination-dermatologists.component';

describe('ExaminationDermatologistsComponent', () => {
  let component: ExaminationDermatologistsComponent;
  let fixture: ComponentFixture<ExaminationDermatologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationDermatologistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationDermatologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
