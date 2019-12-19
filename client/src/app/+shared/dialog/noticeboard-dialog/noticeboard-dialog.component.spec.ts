import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeboardDialogComponent } from './noticeboard-dialog.component';

describe('NoticeboardDialogComponent', () => {
  let component: NoticeboardDialogComponent;
  let fixture: ComponentFixture<NoticeboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
