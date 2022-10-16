import { TestBed } from '@angular/core/testing';

import { MyDialogService } from './my-dialog.service';

describe('MyDialogService', () => {
  let service: MyDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
