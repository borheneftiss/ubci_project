import { Injectable } from '@angular/core';
import {environment} from '../config/config'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {EtabInscri} from './_model/EtabInscri';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InscriEtablissementService {

  ApiUrl = environment.ApiUrl;
  //ApiUrl = "https://innovact-ubci.chifco.com";

  constructor(private http: HttpClient) { }
  getListEtablissementParInscrit():Observable<EtabInscri[]> {
    return this.http.get<EtabInscri[]>(this.ApiUrl + '/api/Users/getNumberByEtab')
  }
}
