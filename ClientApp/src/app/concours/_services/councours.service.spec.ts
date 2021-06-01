import { TestBed, inject } from '@angular/core/testing';

import { CouncoursService } from './councours.service';

describe('CouncoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncoursService]
    });
  });

  it('should be created', inject([CouncoursService], (service: CouncoursService) => {
    expect(service).toBeTruthy();
  }));
});
