import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-conn-inscri',
  templateUrl: './navbar-conn-inscri.component.html',
  styleUrls: ['./navbar-conn-inscri.component.scss']
})
export class NavbarConnInscriComponent implements OnInit {

  Show:boolean;
  constructor() { }

  ngOnInit() {
    this.Show = false;
  }

  // tslint:disable-next-line:member-ordering
  NotShow( ){
    this.Show = true;
    console.log(this.Show);
  }
}
