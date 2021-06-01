import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import {UsersService } from './_services/users.service';
import {User} from './_models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public dataSourceUsers =  new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [ 'Nom', 'Email', 'Téléphone', 'Etablissement' , 'Diplome', 'Niveau',  'ac3' ];
  constructor(private _usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.dataSourceUsers.paginator = this.paginator;
    this.getLListUsers();
  }
  getLListUsers() {
    this._usersService.getListUsers().subscribe(
      QStLists => this.dataSourceUsers.data = QStLists
  );
  }
  Details(_user: User) {
    this.router.navigate(['Details/' + _user.User_Id]);
  }
  applyFilter(filterValue: string) {
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  }
}
