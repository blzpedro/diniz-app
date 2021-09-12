import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from '../pages/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    DialogComponent,
    HeaderComponent
  ],
  exports: [
    DialogComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ComponentsModule { }
