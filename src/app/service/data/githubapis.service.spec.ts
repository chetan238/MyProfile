import { TestBed } from '@angular/core/testing';

import { GithubapisService } from './githubapis.service';

describe('GithubapisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubapisService = TestBed.get(GithubapisService);
    expect(service).toBeTruthy();
  });
});
