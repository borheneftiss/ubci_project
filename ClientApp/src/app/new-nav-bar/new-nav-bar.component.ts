import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {NotificationsService} from '../notifications/services/notifications.service';
import {Notifications} from '../notifications/model/notifications';
import { Notification } from 'rxjs';

@Component({
  selector: 'app-new-nav-bar',
  templateUrl: './new-nav-bar.component.html',
  styleUrls: ['./new-nav-bar.component.scss']
})
export class NewNavBarComponent implements OnInit {
  public token:string
  notif: Notifications[];
  public notif_length:number;
  constructor(private router: Router, private auth: AuthService,private NotificationsService:NotificationsService) { }

  ngOnInit() {
    this.getUserNotification()
    this.getUserNotifBadge()
  }


getUserNotification() {
  this.token=localStorage.getItem('token')
  this.NotificationsService.getUserNotification(this.token)
  .subscribe(
    notif => (
      this.notif = notif
      )   
);
}

getUserNotifBadge() {
  this.token=localStorage.getItem('token')
  this.NotificationsService.getUserNotification(this.token)
  .subscribe(
    data=>{
      this.notif_length=data.length
    }
);
}


  Logout() {
   this.auth.logout();

  }
}
