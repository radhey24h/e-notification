import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticeboardComponent } from './admin-noticeboard.component';

describe('AdminNoticeboardComponent', () => {
  let component: AdminNoticeboardComponent;
  let fixture: ComponentFixture<AdminNoticeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNoticeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
