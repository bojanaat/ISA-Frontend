import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintDermatologistComponent } from './new-complaint-dermatologist.component';

describe('NewComplaintDermatologistComponent', () => {
  let component: NewComplaintDermatologistComponent;
  let fixture: ComponentFixture<NewComplaintDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComplaintDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplaintDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
