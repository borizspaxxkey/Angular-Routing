import { TestBed, async, inject } from '@angular/core/testing';

import { PerSavedGuardGuard } from './per-saved-guard.guard';

describe('PerSavedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerSavedGuardGuard]
    });
  });

  it('should ...', inject([PerSavedGuardGuard], (guard: PerSavedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
