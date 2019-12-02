import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoggedInGuard } from '../services/logged-in.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { Routes, RouterModule } from '@angular/router';
import { PerSavedGuardGuard } from '../services/per-saved-guard.guard';
import { SharedModule } from '../shared/shared.module';

const adminRoute: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [LoggedInGuard],
    children: [
      { path: '', component: UsersComponent },
      { path: 'user-list', component: UsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'permissions', component: PermissionsComponent, canDeactivate: [PerSavedGuardGuard] },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute)
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    PermissionsComponent,
    AdminComponent
  ],
  providers: [
    LoggedInGuard, PerSavedGuardGuard
  ]
})
export class AdminModule { }
