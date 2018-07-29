import { TestBed, inject } from '@angular/core/testing';

import { SerUserService } from './ser-user.service';

describe('SerUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerUserService]
    });
  });

  it('should be created', inject([SerUserService], (service: SerUserService) => {
    expect(service).toBeTruthy();
  }));
});
