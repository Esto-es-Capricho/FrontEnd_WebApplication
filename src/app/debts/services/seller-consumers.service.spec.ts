import { TestBed } from '@angular/core/testing';

import { SellerConsumersService } from './seller-consumers.service';

describe('SellerConsumersService', () => {
  let service: SellerConsumersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerConsumersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
