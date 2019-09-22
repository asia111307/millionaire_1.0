import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppStartMenuComponent} from './app-start-menu.component';

describe('AppStartMenuComponent', () => {
  let component: AppStartMenuComponent;
  let fixture: ComponentFixture<AppStartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
