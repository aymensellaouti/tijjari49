import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authFGuard } from './auth-f.guard';

describe('authFGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authFGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
