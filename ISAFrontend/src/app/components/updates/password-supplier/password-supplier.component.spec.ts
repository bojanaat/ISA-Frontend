import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSupplierComponent } from './password-supplier.component';

describe('PasswordSupplierComponent', () => {
  let component: PasswordSupplierComponent;
  let fixture: ComponentFixture<PasswordSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
