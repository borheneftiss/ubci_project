import { TestBed, inject } from '@angular/core/testing';

import { NumberByNiveauService } from './number-by-niveau.service';

describe('NumberByNiveauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberByNiveauService]
    });
  });

  it('should be created', inject([NumberByNiveauService], (service: NumberByNiveauService) => {
    expect(service).toBeTruthy();
  }));
});
