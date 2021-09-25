import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      {
        path: 'management',
        component: ManagementComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
