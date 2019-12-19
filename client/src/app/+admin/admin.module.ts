import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../+shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [AdminRoutingModule.components]
})
export class AdminModule { }
