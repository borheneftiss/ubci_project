import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';
import { QuestionnaireService } from './questionnaire.service' ;
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
import {MatDatepickerModule, DateAdapter, MatNativeDateModule, MatTooltipModule } from '@angular/material';

import {
  MatPaginatorModule, MatProgressSpinnerModule,
 MatSortModule, MatTableModule
} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { ListReponsesComponent } from './list-reponses/list-reponses.component';
import { AddReponsesComponent } from './add-reponses/add-reponses.component';
import { LoaderInterceptorService } from '../loader/loader-interceptor.service';
import { QuizComponent } from './quiz/quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { ResultresultatComponent } from './resultresultat/resultresultat.component';
import { NavbarQstComponent } from './navbar-qst/navbar-qst.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import { MatMenuModule } from '@angular/material';
@NgModule({
  declarations: [
   QuestionnaireComponent,
   AddQuestionnaireComponent,
   EditComponent,
   ListQuestionComponent,
   AddQuestionComponent,
   EditQuestionComponent,
   ListReponsesComponent,
   AddReponsesComponent,
   QuizComponent,
   ResultresultatComponent,
   NavbarQstComponent,


  ],
  entryComponents: [EditQuestionComponent, ListReponsesComponent, AddReponsesComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule, MatRadioModule,
      FormsModule, MatProgressBarModule, MatDividerModule,
      ReactiveFormsModule,
      MatInputModule,
      FlexLayoutModule,
      MatSelectModule, MatStepperModule,
      MatIconModule, MatMenuModule,
      MatCheckboxModule, MatSliderModule,
      HttpClientModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        MatDatepickerModule, MatNativeDateModule,
        MatTooltipModule

        ],
        providers: [ {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptorService,
          multi: true
        }],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class QuestionnairesModule { }
