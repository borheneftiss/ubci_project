import { Injectable,Inject } from '@angular/core';
import {environment} from '../../config/config';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Calendar} from '../model/calendar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  myAppUrl = environment.ApiUrl;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) { }

  getAllAction(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.myAppUrl + '/api/Workshop/GetAllAction')
}
}
