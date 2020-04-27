import { TestBed } from '@angular/core/testing';

import { RarserviceService } from './rarservice.service';

describe('RarserviceService', () => {
  let service: RarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
