import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppTextboxComponent} from './app-textbox.component';

describe('AppFooterComponent', () => {
  let component: AppTextboxComponent;
  let fixture: ComponentFixture<AppTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
