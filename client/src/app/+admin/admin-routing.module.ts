
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNoticeboardComponent } from './admin-noticeboard/admin-noticeboard.component';
import { AdminStateComponent } from './admin-state/admin-state.component';
import { AdminExaminationComponent } from './admin-examination/admin-examination.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { AdminSyllabusComponent } from './admin-syllabus/admin-syllabus.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
            path: '', component: AdminHomeComponent,
            children: [
                { path: 'admin/noticeboard', component: AdminNoticeboardComponent },
                { path: 'admin/state', component: AdminStateComponent },
                { path: 'admin/examination', component: AdminExaminationComponent },
                { path: 'admin/university', component: AdminUniversityComponent },
                { path: 'admin/syllabus', component: AdminSyllabusComponent },
                { path: 'admin/results', component: AdminResultComponent }
            ]
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
    static components = [
        AdminLayoutComponent,
        AdminHomeComponent,
        AdminNoticeboardComponent,
        AdminResultComponent,
        AdminExaminationComponent,
        AdminStateComponent,
        AdminUniversityComponent,
        AdminSyllabusComponent
    ];

}
