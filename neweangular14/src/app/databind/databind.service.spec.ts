import { TestBed } from '@angular/core/testing';

import { DatabindService } from './databind.service';

describe('DatabindService', () => {
  let service: DatabindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
