import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatTable } from '@angular/material';
import { Noticeboard } from 'src/app/+shared/models/noticeboard';
import { NoticeboardService } from 'src/app/+core/noticeboard/noticeboard.service';
import { NoticeboardDialogComponent } from 'src/app/+shared/dialog/noticeboard-dialog/noticeboard-dialog.component';

@Component({
  selector: 'app-admin-noticeboard',
  templateUrl: './admin-noticeboard.component.html',
  styleUrls: ['./admin-noticeboard.component.css']
})
export class AdminNoticeboardComponent implements OnInit {

  constructor(private noticeboardService: NoticeboardService, private dialog: MatDialog) {
  }
  displayedColumns: string[] = ['notificationType', 'title', 'description', 'url', 'action'];
  dataSource: MatTableDataSource<Noticeboard>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  ngOnInit() {
    this.loadAllSchedule();
  }
  loadAllSchedule() {
    this.noticeboardService.getNoticeboard().subscribe(data => {
      this.dataSource = new MatTableDataSource<Noticeboard>(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(NoticeboardDialogComponent, {
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

    this.noticeboardService.addNoticeboard(row).subscribe(() => {
      this.dataSource.data.push({
        _id: '98d12455170d3e4b5836',
        notificationType: row.notificationType,
        title: row.title,
        description: row.description,
        url: row.url
      });
      // this.paginator._changePageSize(this.paginator.pageSize);
      this.table.renderRows();
    });
  }

  updateRowData(row) {
    this.noticeboardService.updateNoticeboard(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        if (value._id !== undefined && value._id === row._id) {
          value.notificationType = row.notificationType;
          value.title = row.title;
          value.description = row.description;
          value.url = row.url;
        }
        return true;
      });
    });
  }

  deleteRowData(row) {
    this.noticeboardService.deleteNoticeboard(row).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value, key) => {
        return value._id !== row._id;
      });
    });
  }
}
