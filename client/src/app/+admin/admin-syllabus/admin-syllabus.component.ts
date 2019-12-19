import { Component, OnInit, ViewChild } from '@angular/core';
import { SyllabusService } from 'src/app/+core/syllabus/syllabus.service';
import { Syllabus } from 'src/app/+shared/models/syllabus';
import { MatPaginator, MatDialog, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { SyllabusDialogComponent } from 'src/app/+shared/dialog/syllabus-dialog/syllabus-dialog.component';

@Component({
  selector: 'app-admin-syllabus',
  templateUrl: './admin-syllabus.component.html',
  styleUrls: ['./admin-syllabus.component.css']
})
export class AdminSyllabusComponent implements OnInit {
  constructor(private resultService: SyllabusService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['category', 'title', 'url', 'action'];
  
  dataSource: MatTableDataSource<Syllabus>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.resultService.getSyllabus().subscribe(data => {
      this.dataSource = new MatTableDataSource<Syllabus>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(SyllabusDialogComponent, {
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

    this.resultService.addSyllabus(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        category: row.category,
        title: row.title,
        url: row.url
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.resultService.updateSyllabus(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.category = row.category;
          value.title = row.title;
          value.url = row.url;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.resultService.deleteSyllabus(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}
