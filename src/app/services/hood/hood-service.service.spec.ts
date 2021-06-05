import { TestBed } from '@angular/core/testing';

import { HoodServiceService } from './hood-service.service';

describe('HoodServiceService', () => {
  let service: HoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
