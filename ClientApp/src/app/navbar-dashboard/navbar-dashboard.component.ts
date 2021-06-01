import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit, ViewEncapsulation , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { ProfileService } from "./profile.service";
import { User } from '../register/user';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  providers: [ProfileService],
  styleUrls: ['./navbar-dashboard.component.scss'],
})
export class NavbarDashboardComponent implements OnInit {

public user_name:string
public user_email:string
public user_last_name:string
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    private profileService: ProfileService,
    private router: Router,

  ) {
    this.getProfile();
   }

  getProfile() {
    console.log('ffffffffff')
    this.profileService.getProfile().subscribe(
        data => {
          console.log(data)
          console.log(data['User_Email'])
          this.user_name=data['User_Name']
          this.user_email=data['User_Email']
          this.user_last_name=data['User_LastName']

        }
      
    );
}


  ngOnInit() {
  }

  
  test1(){
        
    const timer = JSON.parse(this.localStorage.getItem('timer'));
    const periode = JSON.parse(this.localStorage.getItem('periode'));
    console.log(timer)
    console.log(periode)
    const convert = periode*60000;
    console.log(convert)
    console.log(Date.now())
        if (Date.now() > (timer+convert)) {
          this.router.navigate(['/login']);
          this.localStorage.setItem('token', "")
        }
         
}

}
