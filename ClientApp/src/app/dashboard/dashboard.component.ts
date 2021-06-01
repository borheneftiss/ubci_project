import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/_services/users.service";
//import { groupBy } from 'rxjs/operators';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import {ProjetService} from '../projets/_services/projet.service'
//import Rx from 'rxjs/Rx';
import * as Rx from 'rxjs';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [UsersService],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public nbreUsers: number;
  public nbreProjects: number;
  public nbreQuestionnaires: number;
  public dataUsers:any; 
  public dataUsers2:any;
  datecreate:any;
  groupedData: any = [];
  //result :any=groupBy(this.dataUsers, [{ field: "date_creation" }]);
  constructor(
    private UsersService:UsersService,
    private ProjetService:ProjetService,
  ) { 
   
  }

getListUsers() {
    this.UsersService.getListUsers()
    .subscribe(
        data => {
          this.dataUsers=data;
          this.nbreUsers=data.length
          console.log(this.nbreUsers)
          console.log(this.dataUsers)
          for (var i = 0; i < this.dataUsers.length; i++){

            this.dataUsers2=this.dataUsers[i]['Date_Creation'].slice(0, 10)
          } 
        }
    );
}

getListProjet(){
  this.ProjetService.getListProjet()
  .subscribe(
    data=>{
      this.nbreProjects=data.length
    }
  )
}

getQuestionnaire(){
  this.UsersService.getQuestionnaire().subscribe(
    data => {
      console.log(data[0]["AllQuestions"].length);
      this.nbreQuestionnaires=data[0]["AllQuestions"].length
    }
  )
}

  ngOnInit() {
  }

}
