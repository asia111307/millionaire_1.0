import {TestBed} from '@angular/core/testing';

import {RankListService} from './rank-list.service';

describe('RankListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankListService = TestBed.get(RankListService);
    expect(service).toBeTruthy();
  });
});
