import { Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import {  Inject } from '@angular/core';
import {environment} from '../../config/config';
import { Observable } from 'rxjs';
import {Team} from '../model/team';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  myAppUrl = environment.ApiUrl;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,private http: HttpClient) { }

  getAllTeam(token: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.myAppUrl + '/api/Workshop/GetTeam?Token=' +token)
  }

  getCollaborateur(token: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.myAppUrl + '/api/Workshop/GetCollaborateur?Token=' +token)
  }
}
