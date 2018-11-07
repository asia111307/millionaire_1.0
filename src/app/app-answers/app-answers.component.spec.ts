import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnswersComponent } from './app-answers.component';

describe('AppAnswersComponent', () => {
  let component: AppAnswersComponent;
  let fixture: ComponentFixture<AppAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
