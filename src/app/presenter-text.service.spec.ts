import { TestBed } from '@angular/core/testing';

import { PresenterTextService } from './presenter-text.service';

describe('PresenterTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresenterTextService = TestBed.get(PresenterTextService);
    expect(service).toBeTruthy();
  });
});
