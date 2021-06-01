import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { ListReponsesComponent } from '../list-reponses/list-reponses.component';
import { AddReponsesComponent } from '../add-reponses/add-reponses.component';
import { Questionnaire } from '../questionnaire';
import { QuestionnaireService } from '../questionnaire.service' ;
import {Question } from '../question';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss'],
  providers: [QuestionnaireService],
})
export class ListQuestionComponent implements OnInit {
  id: number;
 public dataSource =  new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'type', 'ac1', 'ac2', 'ac3'];
  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router ,
    private _avRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
      this.getLListQuestions();
       }
  }
  getLListQuestions() {
    this._questionnaireService.getListQuestionsById(this.id).subscribe(
        QStLists => this.dataSource.data = QStLists
    );
}
addQuestion() {
 // this.router.navigate(['questionnaire/add-question/' + this.id]);
 const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = true;
 dialogConfig.autoFocus = true;

 dialogConfig.data = {
     id: this.id,
     dataSource: this.dataSource,
     title: 'Angular For Beginners'
 };

 this.dialog.open(AddQuestionComponent, dialogConfig);
}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  refresh(data: any ) {
    this.dataSource.data = data;
  }
  editQST(qst: Question) {
    const dialogConfigE = new MatDialogConfig();

    dialogConfigE.disableClose = true;
    dialogConfigE.autoFocus = true;

    dialogConfigE.data = {
     qst: qst,
     dataSource: this.dataSource,
     title: 'Angular For Beginners'
 };

 this.dialog.open(EditQuestionComponent, dialogConfigE);
  }


  deleteQST(qst: Question) {

    Swal(
      {
        title: 'Suppression?',
        text: 'Voulez vous supprimer ce question: ' + qst.Text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Ok!'
      }).then((result) => {
        if (result.value) {
          this._questionnaireService.Deletequestion(qst.Question_ID).subscribe((data) => {
            this.getLListQuestions();
        });
          Swal(
            'Suppression!',
            'Votre question a été supprimer .',
            'success'
          );
        }
      }
    );
  }
  


  ListProposition(qst: Question) {
    const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = true;
 dialogConfig.autoFocus = true;

 dialogConfig.data = {
     qst: qst,

     title: 'Propositions '
 };

 this.dialog.open(ListReponsesComponent, dialogConfig);
  }
AddProposition(qst: Question) {
    const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = true;
 dialogConfig.autoFocus = true;

 dialogConfig.data = {
     qst: qst,
     dataSource: this.dataSource,
     title: 'Propositions '
 };

 this.dialog.open(AddReponsesComponent, dialogConfig);
  }
}
