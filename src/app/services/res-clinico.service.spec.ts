import { TestBed } from '@angular/core/testing';

import { ResClinicoService } from './res-clinico.service';

describe('ResClinicoService', () => {
  let service: ResClinicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResClinicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
