import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule, DateAdapter, MatNativeDateModule } from '@angular/material';
import { LoaderInterceptorService } from '../loader/loader-interceptor.service';
import {
  MatPaginatorModule, MatProgressSpinnerModule,
 MatSortModule, MatTableModule
} from '@angular/material';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPrixComponent } from './add-prix/add-prix.component';
@NgModule({

  declarations: [ListComponent, AddComponent, AddPrixComponent],
  entryComponents: [AddPrixComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      AppRoutingModule,
      MatDatepickerModule, MatNativeDateModule

      ],
      providers: [ {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptorService,
        multi: true
      }],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ConcoursModule { }
