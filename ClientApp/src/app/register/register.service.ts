import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders,HttpParams  } from "@angular/common/http";
import { Http, Response, Headers,  ResponseContentType } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs";
import { Etablissement } from "./etablissement";
import { Diplome } from "./Diplome";
import { User } from "./user";
import {environment} from '../config/config';
import { Ville } from './ville';
import { Niveau } from './niveau';
import { Theme } from './theme';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept':'application/json, text/javascript, */*; q=0.01'
  })

};

@Injectable({
  providedIn: "root"
})
export class RegisterService {

  ApiUrl = environment.ApiUrl;
  //ApiUrl = "https://innovact-ubci.chifco.com";

  DiplomeAPI = "/api/Users/GetAllDiplome/"; // Etablissement API
  EtablissementAPI = "/api/Users/GetAllEtab/"; // Diplome API
  RegisterAPI = "/api/Users/AddUser"; // Register API
  
  constructor(private http: HttpClient) {}

  /** GET Etablissement value select from the server */
  getEtablissement(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(this.ApiUrl + this.EtablissementAPI);
  }

  /** GET Diplome value select from the server */
  getDiplome(): Observable<Diplome[]> {
    return this.http.get<Diplome[]>(this.ApiUrl + this.DiplomeAPI);
  }

  register(user: User) {
    return this.http.post(this.ApiUrl + this.RegisterAPI,user, httpOptions);
  }
  getville() {
    return this.http.get<Ville[]>(this.ApiUrl + '/api/Users/GetAllVille');
  }
  getNiveau() {
    return this.http.get<Niveau[]>(this.ApiUrl + '/api/Users/GetNiveau');
  }
  getfile(url: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }
  getTheme() {
    return this.http.get<Theme[]>(this.ApiUrl + '/api/Users/GetAllTheme');
  }
}
