import { TestBed, inject } from '@angular/core/testing';

import { CapacitorService } from './capacitor.service';

describe('CapacitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapacitorService]
    });
  });

  it('should be created', inject([CapacitorService], (service: CapacitorService) => {
    expect(service).toBeTruthy();
  }));
});
