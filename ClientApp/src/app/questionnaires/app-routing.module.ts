import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';
import { EditComponent } from './edit/edit.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultresultatComponent } from './resultresultat/resultresultat.component';
const routes: Routes = [
   { path: 'questionnaire/add/add', component: AddQuestionnaireComponent },
   { path: 'questionnaire/add/:id', component: AddQuestionnaireComponent },
   { path: 'questionnaire/edit/:id', component: EditComponent },
   {path: 'questionnaire/list-question/:id', component: ListQuestionComponent},
   {path: 'questionnaire/add-question/:id', component: AddQuestionComponent},
   {path: 'questionnaire/Quiz/:id/:Token', component: QuizComponent},
   {path: 'questionnaire/Resultat/:id/:Token', component: ResultresultatComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
