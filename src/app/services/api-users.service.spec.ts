import { TestBed } from '@angular/core/testing';

import { ApiUsers } from './api-users.service'

import{HttpClientTestingModule} from '@angular/common/http/testing';

describe('ApiUsers', () => {
  let service: ApiUsers;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiUsers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
