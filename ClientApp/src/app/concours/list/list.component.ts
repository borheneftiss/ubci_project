import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import {CouncoursService } from '../_services/councours.service' ;
import {Concour } from '../_models/concour' ;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CouncoursService]
})
export class ListComponent implements OnInit {
  public dataSourceC =  new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'etat', 'dateDEb', 'dateDCloture', 'date1S', 'date2S', 'dateFinale', 'ac1', 'ac2', 'ac3'];
  constructor(private _CouncoursService: CouncoursService,
    private router: Router ) { }

  ngOnInit() {
    this.getLListConcours();
  }
  getLListConcours() {
    this._CouncoursService.getListConcours().subscribe(
        QStLists => this.dataSourceC.data = QStLists
    );
}
applyFilter(filterValue: string) {
  this.dataSourceC.filter = filterValue.trim().toLowerCase();
}
addQNewC() {
  this.router.navigate(['/concours/Add']);
}
}
