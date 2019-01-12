import {TestBed} from '@angular/core/testing';

import {CurrentValuesService} from './current-values.service';

describe('CurrentValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentValuesService = TestBed.get(CurrentValuesService);
    expect(service).toBeTruthy();
  });
});
