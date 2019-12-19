
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';


const routes: Routes = [
  { path: '', component: UniversityComponent },
  { path: 'university-details/:universityId', component: UniversityDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
