import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable ,Inject} from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private myRoute: Router) { }
  sendToken(token: string) {
    this.localStorage.setItem('token', token); 
  }
  sendRole(role: number) {
    this.localStorage.setItem('role', role); 
  }
  getToken() {
    return this.localStorage.getItem('token');
  }
  getrole() {
    return this.localStorage.getItem('role');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  isAdmin() {
    return (this.getrole() !== null && this.getrole() === '1' );
  }
  logout() {
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('role');
    this.myRoute.navigate(['home']);
  }
  
}
