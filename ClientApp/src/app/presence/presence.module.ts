import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
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
import { ListPresenceComponent } from './list-presence/list-presence.component';

@NgModule({
  imports: [
    CommonModule,
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
      MatDatepickerModule, MatNativeDateModule, MatTooltipModule,
  ],
 /* providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],*/

  declarations: [ListPresenceComponent]
})
export class PresenceModule { }
