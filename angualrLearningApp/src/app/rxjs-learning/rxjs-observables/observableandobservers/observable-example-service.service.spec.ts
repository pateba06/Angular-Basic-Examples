/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObservableExampleServiceService } from './observable-example-service.service';

describe('Service: ObservableExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableExampleServiceService]
    });
  });

  it('should ...', inject([ObservableExampleServiceService], (service: ObservableExampleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
