import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppAnswQuestComponent} from './app-answ-quest.component';

describe('AppAnswQuestComponent', () => {
  let component: AppAnswQuestComponent;
  let fixture: ComponentFixture<AppAnswQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnswQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnswQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
