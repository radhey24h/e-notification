import { Component, OnInit } from '@angular/core';
import { NoticeboardService } from 'src/app/+core/noticeboard/noticeboard.service';
import { Noticeboard } from '../models/noticeboard';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {
  notice: Noticeboard[];
  updates: Noticeboard[];
  announcement: Noticeboard[];

  constructor(private noticeboardService: NoticeboardService) { }

  ngOnInit() {
    this.showNoticeboard();
  }

  showNoticeboard() {
    this.noticeboardService.getNoticeboard()
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.updates = data.filter(t => t.notificationType === 'Updates');
    this.notice = data.filter(t => t.notificationType === 'Notice');
    this.announcement = data.filter(t => t.notificationType === 'Announcement');
  }
}
