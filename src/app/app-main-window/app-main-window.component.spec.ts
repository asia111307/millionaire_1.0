import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainWindowComponent } from './app-main-window.component';

describe('AppMainWindowComponent', () => {
  let component: AppMainWindowComponent;
  let fixture: ComponentFixture<AppMainWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
