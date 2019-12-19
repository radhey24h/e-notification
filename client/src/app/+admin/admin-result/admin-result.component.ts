import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTable, MatDialog } from '@angular/material';
import { Result } from 'src/app/+shared/models/result';
import { ResultDialogComponent } from 'src/app/+shared/dialog/result-dialog/result-dialog.component';
import { ResultService } from 'src/app/+core/result/result.service';

@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css']
})
export class AdminResultComponent implements OnInit {
  constructor(private resultService: ResultService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['resultType', 'title', 'url', 'action'];
  dataSource: MatTableDataSource<Result>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.resultService.getResult().subscribe(data => {
      this.dataSource = new MatTableDataSource<Result>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ResultDialogComponent, {
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
    const title = row.title.trim();
    if (!title) { return; }

    this.resultService.addResult(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        resultType: row.resultType,
        title: row.title,
        url: row.url
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.resultService.updateResult(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.resultType = row.resultType;
          value.title = row.title;
          value.url = row.url;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.resultService.deleteResult(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}
