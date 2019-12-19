import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { State } from 'src/app/+shared/models/state';
import { StateService } from 'src/app/+core/state/state.service';
import { StateDialogComponent } from 'src/app/+shared/dialog/state-dialog/state-dialog.component';

@Component({
  selector: 'app-admin-state',
  templateUrl: './admin-state.component.html',
  styleUrls: ['./admin-state.component.css']
})
export class AdminStateComponent implements OnInit {
  constructor(private resultService: StateService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['stateName', 'zipCode', 'action'];
  dataSource: MatTableDataSource<State>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.resultService.getState().subscribe(data => {
      this.dataSource = new MatTableDataSource<State>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(StateDialogComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row) {
    const stateName = row.stateName.trim();
    if (!stateName) { return; }

    this.resultService.addState(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        stateName: row.stateName,
        zipCode: row.zipCode
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.resultService.updateState(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.stateName = row.stateName;
          value.zipCode = row.zipCode;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.resultService.deleteState(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}
