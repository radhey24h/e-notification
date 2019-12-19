import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResultsComponent } from './results/results.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent,
        children: [
          { path: '', component: NotificationComponent },
          { path: 'about-us', component: AboutUsComponent },
          { path: 'results', component: ResultsComponent },
          { path: 'syllabus', component: SyllabusComponent },
          { path: 'examination', component: ExaminationComponent },
          { path: 'university', loadChildren: () => import('./+university/university.module').then(m => m.UniversityModule) }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {
  static components = [
    HomeComponent,
    AboutUsComponent,
    ResultsComponent,
    SyllabusComponent,
    ExaminationComponent,
    UserLayoutComponent,
    NotificationComponent
  ];

}
