import { TestBed } from '@angular/core/testing';

import { AdditivesService } from './additives.service';

describe('AdditivesService', () => {
  let service: AdditivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
