import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../_models/user';
import {environment} from '../../../app/config/config';
import {Theme} from '../_models/user';
import {Questionnaire} from '../_models/user';
import {UserQuestionnairesForms} from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  myAppUrl = environment.ApiUrl;
  //Url="https://innovact-ubci.chifco.com/"
  
  constructor(private http: HttpClient) { }

getListUsers(): Observable<User[]> {
    // return this.http.get<User[]>(this.myAppUrl + 'api/Users/GetAllUsers')
    return this.http.get<User[]>(this.myAppUrl + 'api/Users/GetAllUsers')
}
getInfoUser(id: number): Observable<User> {
  return this.http.get<User>(this.myAppUrl + 'api/Users/Details/' + id)
}
getTheme(id: number): Observable<Theme[]> {
  return this.http.get<Theme[]>(this.myAppUrl + 'api/Users/ThemeByUser/' + id)
}
getQuestionnaire(): Observable<Questionnaire[]> {
  return this.http.get<Questionnaire[]>(this.myAppUrl + 'api/Questionnaire/GetAll')
}
SendQuestionnaire(_qst: UserQuestionnairesForms, user_Id: number ) {
  return this.http.post(this.myAppUrl + 'api/Questionnaire/SendQuestionnaire?user_Id=' + user_Id, _qst, httpOptions);
}
}


