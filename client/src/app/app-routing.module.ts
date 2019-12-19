import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './+admin/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './+user/user-layout/user-layout.component';

const routes: Routes = [
  { path: '', component: UserLayoutComponent, loadChildren: () => import('./+user/user.module').then(m => m.UserModule) },
  { path: 'admin', component: AdminLayoutComponent, loadChildren: () => import('./+admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./+login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./+signup/signup.module').then(m => m.SignupModule) },
  // { path: 'admin',   redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
