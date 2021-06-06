import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswerComplaintComponent } from './new-answer-complaint.component';

describe('NewAnswerComplaintComponent', () => {
  let component: NewAnswerComplaintComponent;
  let fixture: ComponentFixture<NewAnswerComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAnswerComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnswerComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
