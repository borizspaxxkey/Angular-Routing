import { TestBed, inject } from '@angular/core/testing';

import { ItemServicesService } from './item-services.service';

describe('ItemServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemServicesService]
    });
  });

  it('should be created', inject([ItemServicesService], (service: ItemServicesService) => {
    expect(service).toBeTruthy();
  }));
});
