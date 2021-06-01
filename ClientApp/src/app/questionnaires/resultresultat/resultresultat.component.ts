import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../questionnaire.service' ;
import {TypeResults} from '../type-results';
import {User} from'../user';

@Component({
  selector: 'app-resultresultat',
  templateUrl: './resultresultat.component.html',
  styleUrls: ['./resultresultat.component.scss']
})
export class ResultresultatComponent implements OnInit {

  Result: TypeResults;
  idQuestionnaire: number;
  Token: string;
  user: User;
  constructor(private router: Router , private _avRoute: ActivatedRoute, private _QuestionnaireService: QuestionnaireService) {
    if (this._avRoute.snapshot.params['Token']) {
      this.Token = this._avRoute.snapshot.params['Token'];

    }
    if (this._avRoute.snapshot.params['id']) {
      this.idQuestionnaire = this._avRoute.snapshot.params['id'];
    }
   }

  ngOnInit() {
    this.showDetails(this.Token, this.idQuestionnaire);
    this.getUserByToken(this.Token);
  }
showDetails(token: string, id: number) {
  this._QuestionnaireService.ShowtResult(token, id).subscribe(
    data => this.Result = data
  );
}
getUserByToken(token: string) {

  this._QuestionnaireService.getUserByToken(token).subscribe(
    data => this.user = data
  );
}
}
