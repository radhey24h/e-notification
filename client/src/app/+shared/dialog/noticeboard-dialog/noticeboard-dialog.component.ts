import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Noticeboard } from '../../models/noticeboard';
import { KeyValuePair } from '../../models/key-value-pair';

@Component({
  selector: 'app-noticeboard-dialog',
  templateUrl: './noticeboard-dialog.component.html',
  styleUrls: ['./noticeboard-dialog.component.css']
})
export class NoticeboardDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NoticeboardDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.noticeboardModel = { ...data };
    this.action = data.action;
  }
  action: string;
  noticeboardModel: Noticeboard;
  notificationTypes: KeyValuePair[] = [
    { value: 'Announcement', text: 'Announcement' },
    { value: 'Notice', text: 'Notice' },
    { value: 'Updates', text: 'Updates' }
  ];

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.noticeboardModel });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
