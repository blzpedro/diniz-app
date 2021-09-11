import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from './shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from './../components/components.module';
import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ComponentsModule
  ],

  entryComponents: [
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    HttpService
  ]

})
export class PagesModule { }
