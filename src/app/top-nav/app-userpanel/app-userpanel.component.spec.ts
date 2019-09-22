import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppUserpanelComponent} from './app-userpanel.component';

describe('AppUserpanelComponent', () => {
  let component: AppUserpanelComponent;
  let fixture: ComponentFixture<AppUserpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
