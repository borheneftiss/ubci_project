import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../notifications/services/notifications.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ViewChild} from '@angular/core';
import {Notifications} from '../notifications/model/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public dataSourceP =  new MatTableDataSource();
  public token:string;
  selectedRow

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['User_Notification_Title', 'User_Notification_Description', 'User_Notification_Date' ,'ac1'];

  constructor(private NotificationsService:NotificationsService) { }
 selectRow(row) {
    this.selectedRow = row;
  }
  ngOnInit() {
    this.dataSourceP.paginator = this.paginator;
    this.getUserNotification();
  }

  applyFilter(filterValue: string) {
    this.dataSourceP.filter = filterValue.trim().toLowerCase();
  }

  getUserNotification() {
    this.token=localStorage.getItem('token')
    this.NotificationsService.getUserNotification(this.token).subscribe(
      UserNotif=>this.dataSourceP.data = UserNotif
  );
  }

}
