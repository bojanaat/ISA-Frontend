import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesNonauthComponent } from './pharmacies-nonauth.component';

describe('PharmaciesNonauthComponent', () => {
  let component: PharmaciesNonauthComponent;
  let fixture: ComponentFixture<PharmaciesNonauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciesNonauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciesNonauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
