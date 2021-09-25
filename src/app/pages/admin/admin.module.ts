import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
  ]
})
export class AdminModule { }
