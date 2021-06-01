import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../config/config';
import {Cours} from '../_models/cours';
import {FileCours} from '../_models/file-cours';
import {StatusCours} from '../_models/status-cours';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': 'application/json, text/javascript, */*; q=0.01'
  })

};
@Injectable({
  providedIn: 'root'
})
export class CoursService {
  myAppUrl = environment.ApiUrl;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) {

   }
   getListCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.myAppUrl + '/api/Workshop/GetAllCoursByUser')
}
deleteCours(id: number) {
  return this.http.post(this.myAppUrl + '/api/Workshop/DeleteCours/' + id , httpOptions); 
}
getListFile(): Observable<FileCours[]> {
  return this.http.get<FileCours[]>(this.myAppUrl + '/api/Workshop/GetAllFile')
}
getListSatus(): Observable<StatusCours[]> {
  return this.http.get<StatusCours[]>(this.myAppUrl + '/api/Workshop/getAllStatus')
}
AddCours(_projet: Cours) {

  return this.http.post(this.myAppUrl + '/api/Workshop/AddCours', _projet, httpOptions);
}

delteFileCours(id: number) {

  return this.http.post(this.myAppUrl + '/api/Workshop/delteFileCours?id=' + id, httpOptions);
}
getListFileBycours(id: number): Observable<FileCours[]> {
  return this.http.get<FileCours[]>(this.myAppUrl + '/api/Workshop/GetAllFileByCours?id=' + id);
}
getBycours(id: number): Observable<Cours> {
  return this.http.get<Cours>(this.myAppUrl + '/api/Workshop/GetCoursByid?id=' + id);
}
ResetFiles() {

  return this.http.post(this.myAppUrl + '/api/Workshop/ResetFile', httpOptions);
}
getFormsBycours(id: number) {
  return this.http.get(this.myAppUrl + '/api/Workshop/GetFormCoursByid?id=' + id);
}
UpdateCours(_projet: Cours, id: number) {

  return this.http.post(this.myAppUrl + '/api/Workshop/UpdateCours?id=' + id, _projet, httpOptions);
}
}
