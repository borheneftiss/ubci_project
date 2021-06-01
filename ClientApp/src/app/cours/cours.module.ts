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
import { ListCoursComponent } from './list-cours/list-cours.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { FileDropModule } from 'ngx-file-drop';
import {MatDividerModule} from '@angular/material/divider';
import { DetailsComponent } from './details/details.component';
import { MycoursComponent } from './mycours/mycours.component';
import { PopupvideoComponent } from './popupvideo/popupvideo.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { LabComponent } from './lab/lab.component';
import 'hammerjs';
import { EditCourComponent } from './edit-cour/edit-cour.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, FileDropModule, MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, NgxGalleryModule,
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
      MatDatepickerModule, MatNativeDateModule, MatTooltipModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListCoursComponent, AddCoursComponent, DetailsComponent, MycoursComponent, PopupvideoComponent, LabComponent, EditCourComponent]
})
export class CoursModule { }
