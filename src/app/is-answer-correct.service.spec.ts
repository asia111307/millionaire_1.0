import { TestBed } from '@angular/core/testing';

import { IsAnswerCorrectService } from './is-answer-correct.service';

describe('IsAnswerCorrectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAnswerCorrectService = TestBed.get(IsAnswerCorrectService);
    expect(service).toBeTruthy();
  });
});
