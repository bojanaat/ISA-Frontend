import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsNonauthComponent } from './meds-nonauth.component';

describe('MedsNonauthComponent', () => {
  let component: MedsNonauthComponent;
  let fixture: ComponentFixture<MedsNonauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsNonauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsNonauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
