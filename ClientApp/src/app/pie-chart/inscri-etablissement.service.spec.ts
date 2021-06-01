import { TestBed, inject } from '@angular/core/testing';

import { InscriEtablissementService } from './inscri-etablissement.service';

describe('InscriEtablissementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscriEtablissementService]
    });
  });

  it('should be created', inject([InscriEtablissementService], (service: InscriEtablissementService) => {
    expect(service).toBeTruthy();
  }));
});
