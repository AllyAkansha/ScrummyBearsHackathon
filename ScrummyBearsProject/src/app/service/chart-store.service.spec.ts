import { TestBed, inject } from '@angular/core/testing';

import { ChartStoreService } from './chart-store.service';

describe('ChartStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartStoreService]
    });
  });

  it('should be created', inject([ChartStoreService], (service: ChartStoreService) => {
    expect(service).toBeTruthy();
  }));
});
