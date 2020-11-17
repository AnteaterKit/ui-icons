import { TestBed } from '@angular/core/testing';

import { NgUiIconsLibService } from './ng-ui-icons-lib.service';

describe('NgUiIconsLibService', () => {
  let service: NgUiIconsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiIconsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
