import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedReservationComponent } from './med-reservation.component';

describe('MedReservationComponent', () => {
  let component: MedReservationComponent;
  let fixture: ComponentFixture<MedReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
