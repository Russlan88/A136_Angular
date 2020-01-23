import { TestBed } from '@angular/core/testing';

import { ResourcesDataServicesService } from './resources-data-services.service';

describe('ResourcesDataServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourcesDataServicesService = TestBed.get(ResourcesDataServicesService);
    expect(service).toBeTruthy();
  });
});
