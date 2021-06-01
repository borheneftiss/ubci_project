import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Team} from '../team/model/team';
import {TeamService} from '../team/services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  public token:string;
  public name_collab:'';
  selectedRow;
  public dataSourceP =  new MatTableDataSource();
  public dataSourceP2 =  new MatTableDataSource();

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['User_Name', 'User_LastName', 'User_Email', 'User_Telephone' ,'ac1'];
  displayedColumns2: string[] = ['User_Name', 'User_LastName', 'User_Email', 'User_Telephone'];

  constructor(private TeamService: TeamService, private router: Router) { }
  selectRow(row) {
    this.selectedRow = row;
  }

  ngOnInit() {
    this.dataSourceP.paginator = this.paginator;
    this.dataSourceP2.paginator = this.paginator;
    this.getCollaborateur();
    this.getAllTeam();
    
  }

  applyFilter(filterValue: string) {
    this.dataSourceP.filter = filterValue.trim().toLowerCase();
  }

  getAllTeam() {
    this.token=localStorage.getItem('token')
    this.TeamService.getAllTeam(this.token).subscribe(
      QStLists => this.dataSourceP.data = QStLists
  );
  }

  getCollaborateur() {
    this.token=localStorage.getItem('token')
    this.TeamService.getCollaborateur(this.token).subscribe(
      CollabProp => this.dataSourceP2.data = CollabProp
  );
  }

}



export interface PeriodicElement {
  User_Name: string;
  User_LastName: string;
  User_Email: string;
  User_Telephone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {User_Name:'borhene', User_LastName: 'borhene', User_Email: 'borhene@gmail.com', User_Telephone: '44444444'},
];






