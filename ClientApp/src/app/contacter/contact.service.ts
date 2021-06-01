import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact} from './contact';
import {environment} from '../config/config'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  myAppUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  AddContact(_contact: Contact) {

    return this.http.post(this.myAppUrl + '/api/Users/AddContact', _contact, httpOptions);
  }
}
