import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeboardService } from './noticeboard/noticeboard.service';
import { MessageService } from '../+shared/error-handler/message.service';
import { HttpErrorHandler } from '../+shared/error-handler/error-handler';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NoticeboardService, HttpErrorHandler, MessageService]
})
export class CoreModule { }
