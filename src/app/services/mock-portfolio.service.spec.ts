import { TestBed } from '@angular/core/testing';

import { MockPortfolioService } from './mock-portfolio.service';

describe('MockPortfolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockPortfolioService = TestBed.get(MockPortfolioService);
    expect(service).toBeTruthy();
  });
});
