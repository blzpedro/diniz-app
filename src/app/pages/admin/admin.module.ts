import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScheduleComponent } from './management/schedule/schedule.component';
import { ScheduleListComponent } from './management/schedule-list/schedule-list.component';
import { HttpService } from 'src/app/services/http.service';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    ScheduleComponent,
    ScheduleListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    HttpService
  ]
})
export class AdminModule { }
