import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questionnaire } from './questionnaire';
import { Question } from './question';
import { PaginationService } from './pagination.service';
import {Reponses } from './reponses';
import {environment} from '../config/config'
import {Status } from './Status';
import {Projets} from './Projets';
import {TypeResults} from './type-results';
import {User} from'./user';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': 'application/json, text/javascript, */*; q=0.01'
    })

  };


@Injectable({
    providedIn: 'root'
})

export class QuestionnaireService {
     myAppUrl = environment.ApiUrl;
    

        constructor(private http: HttpClient, private paginationService: PaginationService ) { }
    getQuestionnaires(): Observable<Questionnaire[]> {
        return this.http.get<Questionnaire[]>(this.myAppUrl + '/api/Questionnaire/GetAll')

    }
    getQuestionnairesByProject(id: number): Observable<Questionnaire[]> {
        return this.http.get<Questionnaire[]>(this.myAppUrl + '/api/Questionnaire/GetAllQByProject/' + id)
    }
    getStatus(): Observable<Status[]> {
        return this.http.get<Status[]>(this.myAppUrl + '/api/Questionnaire/GetAllSTatus')

    }

   getQuestionnaireById(id: number) {
        return this.http.get(this.myAppUrl + '/api/Questionnaire/Details/' + id)
   }
   getListQuestionsById(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.myAppUrl + '/api/Questionnaire/GETALLQUESTIONS/' + id)
}
   createQST(questionnaire: Questionnaire) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/AddQST', questionnaire, httpOptions);
  }
  createQSTByProject(questionnaire: Questionnaire, id: number) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/AddQSTByProject?idProject=' + id, questionnaire, httpOptions);
  }
  updateQST(questionnaire: Questionnaire) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Edit', questionnaire, httpOptions);
  }
  deleteQST(id) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Delete/' + id, httpOptions);

}
createquestion(question: Question , id: number) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Createquestion/' + id, question , httpOptions);
}
Updatequestion(question: Question) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Editquestion', question , httpOptions);
}
Deletequestion(id: number) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Deletequestion/' + id , httpOptions);
}

getResponsesByQST(id: number): Observable<Reponses[]>  {
    return this.http.get<Reponses[]>(this.myAppUrl + '/api/Questionnaire/GetAllReponsesByQST/' + id)
}
createreponse(reponses: Response, id: number) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/Createreponse/' + id, reponses , httpOptions);
}
DeleteReponses(id: number) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/DeleteReponses/' + id , httpOptions); 
}
getProjectById(id: number) {
    return this.http.get<Projets>(this.myAppUrl + '/api/Concours/GetProjectById/' + id);
  }
  getDetailsQuestionnaireById(id: number): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(this.myAppUrl + '/api/Questionnaire/Details/' + id)
}

getReponsesByQuestionniare(id: number): Observable<Reponses[]>  {
    return this.http.get<Reponses[]>(this.myAppUrl + '/api/Questionnaire/GetAllReponsesByQuestionnaireT/' + id)
}
SaveReponse(id: number, token: string) {
    return this.http.post(this.myAppUrl + '/api/Questionnaire/SaveReponse?reponseId=' + id + ' &Token=' + token , httpOptions);
}
GetResult(token:string, id:number){
    return this.http.get(this.myAppUrl + '/api/Questionnaire/GetResultIE?Token=' + token + '&idquestionnaire=' + id)
}
ShowtResult(token: string, id: number): Observable<TypeResults> {
    return this.http.get<TypeResults>(this.myAppUrl + '/api/Questionnaire/ShowDetailResult?Token=' + token + '&idquestionnaire=' + id)
}
getUserByToken(token: string): Observable<User> {
    return this.http.get<User>(this.myAppUrl + '/api/Users/getUserByToken?Token=' + token )
}
CheckResult(token:string, id:number){
    return this.http.get(this.myAppUrl + '/api/Questionnaire/CheckResult?Token=' + token + '&idquestionnaire=' + id)
}
}
