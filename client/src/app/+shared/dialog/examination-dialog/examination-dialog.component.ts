import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Examination } from '../../models/examination';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KeyValuePair } from '../../models/key-value-pair';

@Component({
  selector: 'app-examination-dialog',
  templateUrl: './examination-dialog.component.html',
  styleUrls: ['./examination-dialog.component.css']
})
export class ExaminationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExaminationDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.examination = { ...data };
    this.action = data.action;
  }
  action: string;
  examination: Examination;
  examinationTypes: KeyValuePair[] = [
    { value: 'Announcement', text: 'Announcement' },
    { value: 'Notice', text: 'Notice' },
    { value: 'Updates', text: 'Updates' }
  ];

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.examination });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
