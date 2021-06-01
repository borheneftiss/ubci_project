import { Component, OnInit , Input, Inject } from '@angular/core';
import {MatListModule} from '@angular/material';
import {Reponses } from '../reponses';
import { QuestionnaireService } from '../questionnaire.service' ;
import {Question } from '../question';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import Swal from 'sweetalert2';
import {rowsAnimation} from '../../projets/list-projet/annimation';

export interface DialogDataReponse {
  qst: Question;
  title: string;
}
@Component({
  selector: 'app-list-reponses',
  templateUrl: './list-reponses.component.html',
  animations: [rowsAnimation],
  styleUrls: ['./list-reponses.component.scss']
})
export class ListReponsesComponent implements OnInit {

  id: number;
  Text_question: string;
  displayedColumns = ['text', 'ac1', 'ac2'];
  public dataSource =  new MatTableDataSource();
  @Input() qst: Question;
  constructor(private _questionnaireService: QuestionnaireService, public dialogRefE: MatDialogRef<ListReponsesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataReponse) { }

  ngOnInit() {
    this.getreponse();
    this.Text_question = this.data.qst.Text;
  }
getreponse() {
  this._questionnaireService.getResponsesByQST(this.data.qst.Question_ID).subscribe(
    QStLists => this.dataSource.data = QStLists
);
}
onClose() {
  this.dialogRefE.close();
}
deleteReponse(id: number) {
this._questionnaireService.DeleteReponses(id)
.subscribe(
  data => {
    // this.alertService.success('Registration successful', true);
    this.getreponse();

  },
  error => {

  }
);
}
deleteRS(reponse: Reponses) {
  Swal(
    {
      title: 'Suppression?',
      text: 'Voulez vous supprimer cette réponse!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Ok!'
    }).then((result) => {
      if (result.value) {
        this.deleteReponse(reponse.Response_ID);
        Swal(
          'Suppression!',
          'Votre réponse a été supprimer .',
          'success'
        )
      }
    }
  );
}
}
