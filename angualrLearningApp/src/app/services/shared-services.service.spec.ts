/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedServicesService } from './shared-services.service';

describe('Service: SharedServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedServicesService]
    });
  });

  it('should ...', inject([SharedServicesService], (service: SharedServicesService) => {
    expect(service).toBeTruthy();
  }));
});
