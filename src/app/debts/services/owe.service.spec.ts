import { TestBed } from '@angular/core/testing';

import { OweService } from './owe.service';

describe('OweService', () => {
  let service: OweService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OweService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
