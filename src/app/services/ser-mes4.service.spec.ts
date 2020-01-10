import { TestBed } from '@angular/core/testing';

import { SerMes4Service } from './ser-mes4.service';

describe('SerMes4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerMes4Service = TestBed.get(SerMes4Service);
    expect(service).toBeTruthy();
  });
});
