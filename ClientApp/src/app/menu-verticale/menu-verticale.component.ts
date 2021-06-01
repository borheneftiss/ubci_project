import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menu-verticale',
  templateUrl: './menu-verticale.component.html',
  styleUrls: ['./menu-verticale.component.scss']
})
export class MenuVerticaleComponent implements OnInit {
  public testUrl:string;
  constructor(private router: Router, public route: ActivatedRoute, public location: Location, private auth: AuthService) {
    router.events.subscribe((val) => {
      console.log('url:' + this.location.path());
     this.testUrl = this.location.path();
    
    });
   }

  ngOnInit() {
  
  }
  ShowDashbord() {
    this.router.navigate(['/dashbord']);
  }
  Logout()
  {
    this.auth.logout();
  }
}
