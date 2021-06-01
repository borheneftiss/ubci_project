import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , ViewChild, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionnaireService } from '../questionnaire.service' ;
 import { DataSource } from '@angular/cdk/table';
 import Swal from 'sweetalert2';
import { Questionnaire } from '../questionnaire';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Projets} from '../Projets';
import {MatDividerModule} from '@angular/material/divider';
import {rowsAnimation} from '../../projets/list-projet/annimation';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  animations: [rowsAnimation],
    styleUrls: ['./questionnaire.component.scss'],
    providers: [QuestionnaireService],
})
export class QuestionnaireComponent implements OnInit {
   dataSource =  new MatTableDataSource();
   QST: Questionnaire[];
   totalCount: number;
   id: number;
   Projet: Projets;
  
   ProjectShow = false;
   @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = [ 'name', 'email', 'phone', 'date1', 'date2', 'ac', 'ac2', 'ac3'];

    constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
     private _QuestionnaireService: QuestionnaireService, 
     private router: Router , private _avRoute: ActivatedRoute) {
        if (this._avRoute.snapshot.params['id']) {
            this.id = this._avRoute.snapshot.params['id'];
             this.getQuestionnairesByproject(this.id);
             this.ProjectShow = true;
             this._QuestionnaireService.getProjectById(this.id)
    .subscribe( data => {
      this.Projet = data;

    });
             } else {
                this.getQuestionnaires();
                this.ProjectShow = false;
             }

    }
    getQuestionnaires() {
        this._QuestionnaireService.getQuestionnaires().subscribe(
            QStLists => this.dataSource.data = QStLists
        );
  }
  getQuestionnairesByproject(id: number) {
    this._QuestionnaireService.getQuestionnairesByProject(id).subscribe(
        QStLists => this.dataSource.data = QStLists
    );
}
  getAllCustomers() {
   // this._QuestionnaireService.getAllQST()
     //   .subscribe((result: any) => {
         //   this.totalCount = 10;
           // this.dataSource.data = result.body.value;
        // });
}
NavigateToProject() {
    this.router.navigate(['Projets']);
}
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }

      addQuestionnaireP(): void {
          console.log('add');
        this.router.navigate(['questionnaire/add/add']);
      }
      addQuestionnaireByProject(): void {
        this.router.navigate(['questionnaire/add/' + this.id]);
      }
      editQST(qst: Questionnaire): void {
        this.localStorage.removeItem('QSTID');
        this.localStorage.setItem('QSTID', qst.Questionnaire_ID.toString());
        this.router.navigate(['questionnaire/edit/' + qst.Questionnaire_ID]);
      }
      ListQuestion(qst: Questionnaire): void {
        this.router.navigate(['questionnaire/list-question/' + qst.Questionnaire_ID]);
      }
      delete(QST: Questionnaire) {

        Swal(
            {
              title: 'Suppression?',
              text: 'Voulez vous supprimer ce questionnaire: ' + QST.Name,
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'Annuler',
              confirmButtonText: 'Ok!'
            }).then((result) => {
              if (result.value) {
                this._QuestionnaireService.deleteQST(QST.Questionnaire_ID).subscribe((data) => {
                    if (this._avRoute.snapshot.params['id']) {
                        this.id = this._avRoute.snapshot.params['id'];
                         this.getQuestionnairesByproject(this.id);


                         } else {
                            this.getQuestionnaires();

                         }
                });
                Swal(
                  'Suppression!',
                  'Votre questionnaire a été supprimer .',
                  'success'
                );
              }
            }
          );
        
    }
    }
export class UserDataSource extends DataSource<any> {

    constructor(private _QuestionnaireService: QuestionnaireService) {
        super();
    }
    connect(): Observable<Questionnaire[]> {
        return this._QuestionnaireService.getQuestionnaires();
    }
    disconnect() { }
}

