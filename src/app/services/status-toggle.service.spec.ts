import { TestBed, inject } from '@angular/core/testing';

import { StatusToggleService } from './status-toggle.service';

describe('StatusToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusToggleService]
    });
  });

  it('should be created', inject([StatusToggleService], (service: StatusToggleService) => {
    expect(service).toBeTruthy();
  }));
});
