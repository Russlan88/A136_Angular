import { TestBed } from '@angular/core/testing';

import { MainPageDataService } from './main-page-data.service';

describe('MainPageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainPageDataService = TestBed.get(MainPageDataService);
    expect(service).toBeTruthy();
  });
});
