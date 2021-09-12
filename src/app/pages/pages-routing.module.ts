import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../services/login.guard';
import { AdminManagementComponent } from './admin/admin-management/admin-management.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', children: [{ path: '', component: HomeComponent }] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [],
    children: [
      {
        path: 'management',
        component: AdminManagementComponent,
      }
    ]
  },
  { path: 'calendar', component: CalendarComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
