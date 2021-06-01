import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../dashboard/profile.service";
import { User } from '../register/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar-general',
  templateUrl: './navbar-general.component.html',
  providers: [ProfileService],
  styleUrls: ['./navbar-general.component.scss']
})
export class NavbarGeneralComponent implements OnInit {
  public user_name: string ;
  public user_email: string;
  public user_last_name: string;
  public role : number ;
  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) {


    this.getProfile();
  }
  getProfile() {

    this.profileService.getProfile().subscribe(
        data => {
          console.log(data) ;
          console.log(data['User_Email']);
          this.user_name = data['User_Name'];
          this.user_email = data['User_Email'];
          this.user_last_name = data['User_LastName'];
          this.role = data['Role_Id'];
            console.log(data['Role_Id']);
        }

    );
}

test1(){
        
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

redirect_home(){
  const token = localStorage.getItem('token');
  console.log(token)
  if(token!=""){
    this.router.navigate(['/home_connect'])
  }else{
    this.router.navigate(['/home'])
  }
}

logout(){
  console.log("logout_marche")
  const token = localStorage.getItem('token');
  const timer = JSON.parse(localStorage.getItem('timer'));
  const periode = JSON.parse(localStorage.getItem('periode'));
  console.log(timer)
  console.log(periode)
  const convert = periode*60000;
  console.log(convert)
  console.log(Date.now())
  this.router.navigate(['/home']);
     

}

  ngOnInit() {
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }
}
