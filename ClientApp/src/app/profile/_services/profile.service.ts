import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../app/config/config';
import { Profile} from '../_models/profile';
import { FormPassword} from '../_models/form-password';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  myAppUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  getUserProfil(token: string): Observable<Profile> {
    return this.http.get<Profile>(this.myAppUrl + '/api/Users/GetProfil?token=' + token)
}
ChangePSW(psw: FormPassword, token: string) {

  return this.http.post(this.myAppUrl + '/api/Users/ChangePassword?Token=' + token, psw, httpOptions);
}
}
