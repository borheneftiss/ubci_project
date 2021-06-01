import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../questionnaire.service' ;
import { Questionnaire } from '../questionnaire';
import { Question } from '../question';
import {Reponses} from '../reponses';
import {User} from'../user';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
 idQuestionnaire: number;
 questionnaire: Questionnaire;
 listQSt: Question[];
 Token: string;
 listreponsesr: Reponses[];
  listreponses: Reponses[];
  user: User;
  value = 0;
 reponse: Reponses;
 checkValidation: boolean;
  constructor(private router: Router , private _avRoute: ActivatedRoute, private _QuestionnaireService: QuestionnaireService, ) {

    if (this._avRoute.snapshot.params['id']) {
      this.idQuestionnaire = this._avRoute.snapshot.params['id'];
    }
    if (this._avRoute.snapshot.params['Token']) {
      this.Token = this._avRoute.snapshot.params['Token'];

    }
   }
   CheckResult(token: string, id: number): boolean {
    let validation: boolean;
    this._QuestionnaireService.CheckResult(token, id).subscribe(
      data => {
console.log(data);
       if ( data['Success'] === true) {
        validation = true;


          this.getQuestionnaireDetail(this.idQuestionnaire);
          this.getListQST(this.idQuestionnaire);
          this.getAlllisponses(this.idQuestionnaire);
          this.getUserByToken(this.Token);

       } else {
        validation = false;
        this.router.navigate(['/home']);
       }

      }

    );
    return  validation;
  }
  ngOnInit() {

    if (this._avRoute.snapshot.params['id']) {
      this.idQuestionnaire = this._avRoute.snapshot.params['id'];
      this.CheckResult(this.Token, this.idQuestionnaire) ;


    }

  }
getQuestionnaireDetail(id: number) {
this._QuestionnaireService.getDetailsQuestionnaireById(id).subscribe(
  data => this.questionnaire = data
);
}
getListQST(id: number) {
  this._QuestionnaireService.getListQuestionsById(id).subscribe(
    data => this.listQSt = data
  );

  }
  getListResponse(id: number): Reponses[] {

    let someArray = [];
     //this.listreponses.filter(d => d.Question_ID === id);

     this.listreponses.forEach((item, index) => {

      if (item.Question_ID === id) {
       someArray.push(item);
      }
      this.listreponsesr = someArray;

  });
  return this.listreponsesr;
  }

  getAlllisponses (id: number) {
    this._QuestionnaireService.getReponsesByQuestionniare(id).subscribe(
      data => this.listreponses = data
    );
  }
  getValue(id: number) {
    if (this._avRoute.snapshot.params['id']) {
      this.Token = this._avRoute.snapshot.params['Token'];

    this._QuestionnaireService.SaveReponse(id, this.Token).subscribe(
      data => console.log(data)
    );
    }

  }
  SendingQuiz() {
    this.GetResult(this.Token, this.idQuestionnaire);
  }
  GetResult(token: string, id:number) {
    this._QuestionnaireService.GetResult(token,id).subscribe(
      data => {console.log(data);
      if (data['Success'] === true)
      {

      this.router.navigate(['questionnaire/Resultat/' + this.idQuestionnaire + '/' + this.Token]);
      }
    }
    );
  }
  getUserByToken(token: string) {

    this._QuestionnaireService.getUserByToken(token).subscribe(
      data => this.user = data
    );
  }
  Progress(id: number) {
  this.value = 25 * id;
  }
 
}
