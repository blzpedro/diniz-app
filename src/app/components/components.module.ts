import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    DialogComponent,
    HeaderComponent,
    LoaderComponent
  ],
  exports: [
    DialogComponent,
    HeaderComponent,
    LoaderComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ComponentsModule { }
