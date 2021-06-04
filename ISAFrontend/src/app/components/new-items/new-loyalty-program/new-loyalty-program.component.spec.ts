import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoyaltyProgramComponent } from './new-loyalty-program.component';

describe('NewLoyaltyProgramComponent', () => {
  let component: NewLoyaltyProgramComponent;
  let fixture: ComponentFixture<NewLoyaltyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLoyaltyProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoyaltyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
