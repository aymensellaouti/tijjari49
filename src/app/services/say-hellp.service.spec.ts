import { TestBed } from '@angular/core/testing';

import { SayHellpService } from './say-hellp.service';

describe('SayHellpService', () => {
  let service: SayHellpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayHellpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
