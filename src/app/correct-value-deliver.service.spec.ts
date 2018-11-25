import { TestBed } from '@angular/core/testing';

import { CorrectValueDeliverService } from './correct-value-deliver.service';

describe('CorrectValueDeliverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrectValueDeliverService = TestBed.get(CorrectValueDeliverService);
    expect(service).toBeTruthy();
  });
});
