import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { State } from '../../models/state';

@Component({
  selector: 'app-state-dialog',
  templateUrl: './state-dialog.component.html',
  styleUrls: ['./state-dialog.component.css']
})
export class StateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StateDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.state = { ...data };
    this.action = data.action;
  }
  action: string;
  state: State;

  ngOnInit() {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.state });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
