import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserAlertComponent } from './user-alert/user-alert.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { ServiceComponent } from './service/service.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NoticeboardDialogComponent } from './dialog/noticeboard-dialog/noticeboard-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule } from '@angular/material';
import { ResultDialogComponent } from './dialog/result-dialog/result-dialog.component';
import { StateDialogComponent } from './dialog/state-dialog/state-dialog.component';
import { SyllabusDialogComponent } from './dialog/syllabus-dialog/syllabus-dialog.component';
import { UniversityDialogComponent } from './dialog/university-dialog/university-dialog.component';
import { ExaminationDialogComponent } from './dialog/examination-dialog/examination-dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NoticeboardComponent,
    UserAlertComponent,
    ServiceComponent,
    AdminNavbarComponent,
    NoticeboardDialogComponent,
    ResultDialogComponent,
    StateDialogComponent,
    SyllabusDialogComponent,
    UniversityDialogComponent,
    ExaminationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NoticeboardComponent,
    UserAlertComponent,
    ServiceComponent,
    AdminNavbarComponent,
    NoticeboardDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    NoticeboardDialogComponent,
    ResultDialogComponent,
    StateDialogComponent,
    SyllabusDialogComponent,
    UniversityDialogComponent,
    ExaminationDialogComponent
  ]
})
export class SharedModule { }
