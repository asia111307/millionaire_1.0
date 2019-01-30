import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppResignationComponent} from './app-resignation.component';

describe('AppResignationComponent', () => {
  let component: AppResignationComponent;
  let fixture: ComponentFixture<AppResignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppResignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppResignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
