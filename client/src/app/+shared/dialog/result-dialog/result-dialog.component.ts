import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Result } from '../../models/result';
import { KeyValuePair } from '../../models/key-value-pair';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.result = { ...data };
    this.action = data.action;
  }
  action: string;
  result: Result;
  resultTypes: KeyValuePair[] = [
    { value: 'Announcement', text: 'Announcement' },
    { value: 'Notice', text: 'Notice' },
    { value: 'Updates', text: 'Updates' }
  ];

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.result });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
