import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from '../pages/shared.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ComponentsModule { }
