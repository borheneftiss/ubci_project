import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../register/user';
import { Profile } from 'selenium-webdriver/firefox';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
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

  ApiUrl = "https://innovact-ubci.chifco.com/";
  ProfileAPI = "api/Users/UpdateUser/"; // ProfileAPI


  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile[]> {
    const token = localStorage.getItem('token');
    console.log(token)
    return this.http.get<Profile[]>(this.ApiUrl + 'api/Users/GetProfil?Token=' +token)
}

updateProfile(user: User, token:string) {
  token = localStorage.getItem('token');
  return this.http.post(this.ApiUrl + 'api/Users/UpdateUser?token=' + token, user , httpOptions);
}

}
