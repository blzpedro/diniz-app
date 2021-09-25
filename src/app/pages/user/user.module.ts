import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule
  ]
})
export class UserModule { }
