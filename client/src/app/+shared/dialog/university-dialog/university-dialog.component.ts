import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { University } from '../../models/university';
import { State } from '../../models/state';

@Component({
  selector: 'app-university-dialog',
  templateUrl: './university-dialog.component.html',
  styleUrls: ['./university-dialog.component.css']
})
export class UniversityDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UniversityDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.university = { ...data };
    this.action = data.action;
  }
  action: string;
  university: University;
  states: State[] = [];

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.university });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
