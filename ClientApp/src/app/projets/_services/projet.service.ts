import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Projet} from '../_models/projet';
import {Gategorie} from '../_models/gategorie';
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
export class ProjetService {
 // myAppUrl = 'https://innovact-ubci.chifco.com/';
 myAppUrl = environment.ApiUrl;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) { }
  getListProjet(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.myAppUrl + '/api/Concours/GetAllProject')
}
getListCategorie(): Observable<Gategorie[]> {
  return this.http.get<Gategorie[]>(this.myAppUrl + '/api/Concours/GetAllCategorie')
}
AddProjet(_projet: Projet, token: string) {
  token = this.localStorage.getItem('token');
  return this.http.post(this.myAppUrl + '/api/Concours/AddProject?Token=' + token, _projet, httpOptions);
}
deleteProjet(id: number) {
  return this.http.post(this.myAppUrl + '/api/Concours/DeleteProject/' + id , httpOptions); 
}
getProjectById(id: number) {
  return this.http.get<Projet>(this.myAppUrl + '/api/Concours/GetProjectById/' + id);
}
UpdateProject(_projet: Projet, id: number) {
  return this.http.post(this.myAppUrl + '/api/Concours/EditProjet?id=' + id, _projet , httpOptions);
}
}
