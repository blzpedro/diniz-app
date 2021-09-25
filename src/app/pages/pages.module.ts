import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './../components/components.module';
import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    HttpService
  ]

})
export class PagesModule { }
