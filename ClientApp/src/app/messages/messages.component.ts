import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import {MessagesService } from './_services/messages.service';
import {Contacts} from './_models/contacts';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {SendIngComponent} from './_components/send-ing/send-ing.component';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public dataSourceM =  new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [ 'Nom', 'Email', 'Téléphone',  'ac3' ];
  constructor(private _contactService: MessagesService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSourceM.paginator = this.paginator;
    this.getLListUsers();
  }
  applyFilter(filterValue: string) {
    this.dataSourceM.filter = filterValue.trim().toLowerCase();
  }
  getLListUsers() {
    this._contactService.getListMessages().subscribe(
      QStLists => this.dataSourceM.data = QStLists
  );
  }
  ShowMessagePopup(message: Contacts) {
    const dialogConfig = new MatDialogConfig();

 dialogConfig.disableClose = true;
 dialogConfig.autoFocus = true;

 dialogConfig.data = {
     id: message.Contact_Id,
     dataSource: this.dataSourceM,
     title: 'Angular For Beginners'
 };

 this.dialog.open(SendIngComponent, dialogConfig);
  }
}
