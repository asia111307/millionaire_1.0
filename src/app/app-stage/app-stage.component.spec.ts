import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStageComponent } from './app-stage.component';

describe('AppStageComponent', () => {
  let component: AppStageComponent;
  let fixture: ComponentFixture<AppStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
