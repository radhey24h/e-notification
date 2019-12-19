import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatDialog, MatTableDataSource } from '@angular/material';
import { ExaminationService } from 'src/app/+core/examination/examination.service';
import { Examination } from 'src/app/+shared/models/examination';
import { ExaminationDialogComponent } from 'src/app/+shared/dialog/examination-dialog/examination-dialog.component';

@Component({
  selector: 'app-admin-examination',
  templateUrl: './admin-examination.component.html',
  styleUrls: ['./admin-examination.component.css']
})
export class AdminExaminationComponent implements OnInit {

  constructor(private examinationService: ExaminationService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['examinationType', 'title', 'description', 'url', 'attachment', 'action'];
  dataSource: MatTableDataSource<Examination>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.examinationService.getExamination().subscribe(data => {
      this.dataSource = new MatTableDataSource<Examination>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ExaminationDialogComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(examination => {
      if (examination.event === 'Add') {
        this.addRowData(examination.data);
      } else if (examination.event === 'Update') {
        this.updateRowData(examination.data);
      } else if (examination.event === 'Delete') {
        this.deleteRowData(examination.data);
      }
    });
  }

  addRowData(row) {
    const title = row.title.trim();
    if (!title) { return; }

    this.examinationService.addExamination(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        examinationType: row.examinationType,
        title: row.title,
        description: row.description,
        url: row.url,
        attachment: row.attachment
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.examinationService.updateExamination(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.examinationType = row.examinationType;
          value.description = row.description;
          value.attachment = row.attachment;
          value.title = row.title;
          value.url = row.url;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.examinationService.deleteExamination(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}

