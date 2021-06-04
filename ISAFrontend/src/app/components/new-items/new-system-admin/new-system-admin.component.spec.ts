import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSystemAdminComponent } from './new-system-admin.component';

describe('NewSystemAdminComponent', () => {
  let component: NewSystemAdminComponent;
  let fixture: ComponentFixture<NewSystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSystemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
