import { SharedModule } from './+shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './+core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './+admin/admin.module';
import { LoginModule } from './+login/login.module';
import { SignupModule } from './+signup/signup.module';
import { UserModule } from './+user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    SignupModule,
    UserModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
