import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../+shared/shared.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [UserRoutingModule.components, NotificationComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    exports: [UserRoutingModule.components]
})
export class UserModule { }
