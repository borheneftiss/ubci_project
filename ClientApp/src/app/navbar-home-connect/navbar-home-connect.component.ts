import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../navbar-dashboard/profile.service';
import { Router } from "@angular/router";
import { User } from '../register/user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar-home-connect',
  templateUrl: './navbar-home-connect.component.html',
  styleUrls: ['./navbar-home-connect.component.scss']
})
export class NavbarHomeConnectComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router, public auth: AuthService) { }
  Email: string;
  Show:boolean;
  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    console.log('ffffffffff')
    this.profileService.getProfile().subscribe(
        data => {
        
          console.log(data['User_Email'])
          this.Email = data['User_Email'];

        }
      
    );
}
NotShow( ){
  this.Show = true;
  console.log(this.Show);
}

Logout() {

     this.auth.logout();
     this.router.navigate(['/home']);
}
ShowProfile() {
  this.router.navigate(['/Accueil/profile']);
}
}
