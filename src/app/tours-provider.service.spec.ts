import { TestBed } from '@angular/core/testing';

import { ToursProviderService } from './tours-provider.service';

describe('ToursProviderService', () => {
  let service: ToursProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
