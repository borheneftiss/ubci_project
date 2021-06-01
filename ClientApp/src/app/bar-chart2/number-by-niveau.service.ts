import { Injectable } from '@angular/core';
import {environment} from '../config/config';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumberByNiveauService {
  ApiUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  getNumberByNiveau(){
    return this.http.get(this.ApiUrl + '/api/Users/getNumberByNiveau')
  }
}
