import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    private router: Router, public auth: AuthService
  ) { }

  ngOnInit() {
    console.log("auth:" + this.auth.isLoggednIn());
  }

 /* test(){
        
    const timer = JSON.parse(localStorage.getItem('timer'));
    const periode = JSON.parse(localStorage.getItem('periode'));
    console.log(timer)
    console.log(periode)
    const convert = periode*60000;
    console.log(convert)
    console.log(Date.now())
        if (Date.now() > (timer+convert)) {
          this.router.navigate(['/login']);
          localStorage.setItem('token', "")
        }
         
}
deconnection(){
this.router.navigate(["/login"]);
}*/


}
