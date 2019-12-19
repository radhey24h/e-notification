import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Syllabus } from '../../models/syllabus';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KeyValuePair } from '../../models/key-value-pair';

@Component({
  selector: 'app-syllabus-dialog',
  templateUrl: './syllabus-dialog.component.html',
  styleUrls: ['./syllabus-dialog.component.css']
})
export class SyllabusDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SyllabusDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.syllabus = { ...data };
    this.action = data.action;
  }
  action: string;
  syllabus: Syllabus;
  categories: KeyValuePair[] = [
    { value: 'Announcement', text: 'Announcement' },
    { value: 'Notice', text: 'Notice' },
    { value: 'Updates', text: 'Updates' }
  ];

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.syllabus });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
