import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menu-verticale-responsive',
  templateUrl: './menu-verticale-responsive.component.html',
  styleUrls: ['./menu-verticale-responsive.component.scss']
})
export class MenuVerticaleResponsiveComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute, public location: Location, private auth: AuthService) { }

  ngOnInit() {
  }
  Logout()
  {
    this.auth.logout();
  }
}
