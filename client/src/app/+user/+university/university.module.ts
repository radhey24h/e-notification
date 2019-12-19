import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university/university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityRoutingModule } from './university-routing.module';

@NgModule({
  declarations: [UniversityComponent, UniversityDetailsComponent],
  imports: [
    UniversityRoutingModule,
    CommonModule
  ],
  exports: [UniversityComponent, UniversityDetailsComponent]
})
export class UniversityModule { }
