import { TestBed } from '@angular/core/testing';

import { RickymortyService } from './rickymorty.service';

describe('RickymortyService', () => {
  let service: RickymortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickymortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
