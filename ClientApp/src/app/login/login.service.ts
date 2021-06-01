import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from './Login';
import { HttpHeaders,HttpParams  } from "@angular/common/http";
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
export class LoginService {

  ApiUrl = environment.ApiUrl;
  //ApiUrl = "https://innovact-ubci.chifco.com";
  LoginAPI = ""; // Register API

  constructor(private http: HttpClient) { }
  login(login: Login) {
    return this.http.post(this.ApiUrl + '/api/Users/Login', login, httpOptions);
  }
  ResetPassword(email: string) {
    return this.http.post(this.ApiUrl + '/api/Users/RestPassword?email=' + email,  httpOptions);
  }
}
