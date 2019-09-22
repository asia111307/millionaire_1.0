import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppDecisionComponent} from './app-decision.component';

describe('AppDecisionComponent', () => {
  let component: AppDecisionComponent;
  let fixture: ComponentFixture<AppDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
