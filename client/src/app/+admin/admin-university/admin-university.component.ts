import { Component, OnInit, ViewChild } from '@angular/core';
import { UniversityService } from 'src/app/+core/university/university.service';
import { University } from 'src/app/+shared/models/university';
import { MatSort, MatPaginator, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { UniversityDialogComponent } from 'src/app/+shared/dialog/university-dialog/university-dialog.component';

@Component({
  selector: 'app-admin-university',
  templateUrl: './admin-university.component.html',
  styleUrls: ['./admin-university.component.css']
})
export class AdminUniversityComponent implements OnInit {

  constructor(private resultService: UniversityService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['stateName', 'universityName', 'url', 'action'];
  dataSource: MatTableDataSource<University>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.resultService.getUniversity().subscribe(data => {
      this.dataSource = new MatTableDataSource<University>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UniversityDialogComponent, {
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

    this.resultService.addUniversity(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        stateName: row.stateName,
        universityName: row.universityName,
        url: row.url
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.resultService.updateUniversity(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.stateName = row.stateName;
          value.universityName = row.universityName;
          value.url = row.url;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.resultService.deleteUniversity(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}
