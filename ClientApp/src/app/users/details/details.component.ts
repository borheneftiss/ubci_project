import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UsersService } from '../_services/users.service';
import {User} from '../_models/user';
import {Theme} from '../_models/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {SendingComponent} from '../sending/sending.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: User;
  User_Id: number;
  Themes: Theme[];
  constructor(private router: Router , private _avRoute: ActivatedRoute, private _usersService: UsersService ,private dialog: MatDialog) {
    if (this._avRoute.snapshot.params['id']) {
      this.User_Id = this._avRoute.snapshot.params['id'];
    }
  }

  ngOnInit() {
this.getDetailUsers(this.User_Id);
this.getTheme(this.User_Id);
  }
getDetailUsers(id: number) {
  this._usersService.getInfoUser(id).subscribe(
    data => this.user = data
);
}
getTheme(id: number) {
  this._usersService.getTheme(id).subscribe(
    data => this.Themes = data
);
}
Sending() {
  const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = false;
 dialogConfig.autoFocus = true;

 dialogConfig.data = {
     id: this.User_Id,

     title: 'Sending'
 };

 this.dialog.open(SendingComponent, dialogConfig);
}
}
