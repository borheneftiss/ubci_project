import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable ,Inject} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../register/user';
import { Profile } from 'selenium-webdriver/firefox';
import { Observable, config } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
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
export class ProfileService {

  ApiUrl = environment.ApiUrl;
  //ApiUrl = "https://innovact-ubci.chifco.com";
  ProfileAPI = "api/Users/UpdateUser/"; // ProfileAPI


  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) { }

  getProfile(): Observable<Profile[]> {
    const token = this.localStorage.getItem('token');
    console.log(token)
    return this.http.get<Profile[]>(this.ApiUrl + '/api/Users/GetProfil?Token=' +token)
    //console.log(this.getProfile)
}

updateProfile(user: User, token: string) {
  token = this.localStorage.getItem('token');
  return this.http.post(this.ApiUrl + '/api/Users/UpdateUser?token=' + token, user , httpOptions);
}

}
