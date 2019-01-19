import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWelcomeComponent } from './app-welcome.component';

describe('AppWelcomeComponent', () => {
  let component: AppWelcomeComponent;
  let fixture: ComponentFixture<AppWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
