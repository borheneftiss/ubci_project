import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Concour} from '../_models/concour';
import {Prix } from '../_models/prix';
import {TypePrix } from '../_models/type-prix';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class CouncoursService {
  myAppUrl = 'http://innovact-ubci.chifco.com/';
  constructor(private http: HttpClient) { }

  getListConcours(): Observable<Concour[]> {
    return this.http.get<Concour[]>(this.myAppUrl + 'api/Concours/GetAllConcours')
}

   AddConcours(_concour: Concour) {
    return this.http.post(this.myAppUrl + 'api/Concours/AddConcours', _concour, httpOptions);
  }
  getListPrixForAdd(): Observable<Prix[]> {
    return this.http.get<Prix[]>(this.myAppUrl + 'api/Concours/GetAllPrixForC')
  }
  AddPrix(prix: Prix) {
    return this.http.post(this.myAppUrl + 'api/Concours/AddPrix/0', prix, httpOptions);
  }
  getTypePrix(): Observable<TypePrix[]> {
    return this.http.get<TypePrix[]>(this.myAppUrl + 'api/Concours/GetAllTypePrix')
  }
}
