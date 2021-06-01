import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts} from '../_models/contacts';
import {environment} from '../../../app/config/config';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  myAppUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  getListMessages(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.myAppUrl + 'api/Users/GetAllMessages')
}

SendMessage(idContact: number, Message: string) {
  return this.http.post(this.myAppUrl + 'api/Users/SendingAnswer?idContact=' + idContact + '&message=' + Message, httpOptions);
}
}
