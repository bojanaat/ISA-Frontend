import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedsComponent } from './search-meds.component';

describe('SearchMedsComponent', () => {
  let component: SearchMedsComponent;
  let fixture: ComponentFixture<SearchMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
