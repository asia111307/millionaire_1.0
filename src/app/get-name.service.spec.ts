import { TestBed } from '@angular/core/testing';

import { GetNameService } from './get-name.service';

describe('GetNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNameService = TestBed.get(GetNameService);
    expect(service).toBeTruthy();
  });
});
