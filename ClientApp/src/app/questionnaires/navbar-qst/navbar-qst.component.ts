import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/auth.service';
import { Router } from "@angular/router";
import { User } from '../../../app/register/user';
import { ProfileService } from '../../../app/navbar-dashboard/profile.service';
@Component({
  selector: 'app-navbar-qst',
  templateUrl: './navbar-qst.component.html',
  styleUrls: ['./navbar-qst.component.scss']
})
export class NavbarQstComponent implements OnInit {

   Name: string;
   lastName: string;
  constructor(public auth: AuthService, private router: Router, private profileService: ProfileService ) { }

  ngOnInit() {
    this.getProfile();
  }
  Logout() {

    this.auth.logout();
    this.router.navigate(['/home']);
}
getProfile() {
  
  this.profileService.getProfile().subscribe(
      data => {

        console.log(data['User_Name'])
        this.Name = data['User_Name'];
        this.lastName = data['User_LastName'];
      }

  );
}
}
