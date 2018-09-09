import { TestBed, inject } from '@angular/core/testing';

import { CarStatus } from './car-status.service';

describe('CarStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarStatus]
    });
  });

  it('should be created', inject([CarStatus], (service: CarStatus) => {
    expect(service).toBeTruthy();
  }));
});
