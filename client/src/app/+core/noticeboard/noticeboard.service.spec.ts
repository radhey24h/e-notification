import { TestBed } from '@angular/core/testing';

import { NoticeboardService } from './noticeboard.service';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticeboardService = TestBed.get(NoticeboardService);
    expect(service).toBeTruthy();
  });
});
