import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppInstructionsComponent} from './app-instructions.component';

describe('AppInstructionsComponent', () => {
  let component: AppInstructionsComponent;
  let fixture: ComponentFixture<AppInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
