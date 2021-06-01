import { Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import {  Inject } from '@angular/core';
import {Notifications} from '../model/notifications';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../config/config';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  myAppUrl = environment.ApiUrl;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,private http: HttpClient) { }

  getUserNotification(token: string): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(this.myAppUrl + '/api/Workshop/GetUSerNotification?Token=' +token)
  }

}
