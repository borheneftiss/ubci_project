import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-presence',
  templateUrl: './list-presence.component.html',
  styleUrls: ['./list-presence.component.scss']
})
export class ListPresenceComponent implements OnInit {

  displayedColumns: string[] = ['Titre_cours', 'list_presence', 'Ajout_par', 'Date_Ajout'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  Titre_cours: string;
  list_presence: string;
  Ajout_par: string;
  Date_Ajout: string;
  
}




const ELEMENT_DATA: PeriodicElement[] = [
  {Titre_cours: 'Cours 1', list_presence: 'Liste1.xlsx', Ajout_par: 'Nom Prénom', Date_Ajout: '18.11.2018,04:02'},
  {Titre_cours: 'Cours n', list_presence: 'Liste2.xlsx', Ajout_par: 'Nom Prénom', Date_Ajout: '18.11.2018,04:02'},
  {Titre_cours: 'Cours n', list_presence: 'Liste3.xlsx', Ajout_par: 'Nom Prénom', Date_Ajout: '18.11.2018,04:02'},
];
