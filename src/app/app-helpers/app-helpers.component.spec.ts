import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHelpersComponent } from './app-helpers.component';

describe('AppHelpersComponent', () => {
  let component: AppHelpersComponent;
  let fixture: ComponentFixture<AppHelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
