import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPeopleComponent } from './app-people.component';

describe('AppPeopleComponent', () => {
  let component: AppPeopleComponent;
  let fixture: ComponentFixture<AppPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
