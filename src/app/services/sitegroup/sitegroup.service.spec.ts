import { TestBed } from '@angular/core/testing';

import { SitegroupService } from './sitegroup.service';

describe('SitegroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitegroupService = TestBed.get(SitegroupService);
    expect(service).toBeTruthy();
  });
});
