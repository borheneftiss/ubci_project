import { Component, OnInit, ViewChild } from '@angular/core';
import { rowsAnimation } from '../list-cours/annimation';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {CoursService} from '../_services/cours.service';
import {Cours} from '../_models/cours';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mycours',
  templateUrl: './mycours.component.html',
  styleUrls: ['./mycours.component.scss']
})
export class MycoursComponent implements OnInit {
  selectedRow;
  public dataSourceP =  new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'categorie', 'dateDEb', 'NEXpert', 'ac1' ];
  constructor(private _coursservice: CoursService, private router: Router) { 
    
  }
  selectRow(row) {
    this.selectedRow = row;
  }
  ngOnInit() {
    this.dataSourceP.paginator = this.paginator;
      this.getLListCours();
  }
  getLListCours() {
    this._coursservice.getListCours().subscribe(
      QStLists => this.dataSourceP.data = QStLists
  );
  }
  applyFilter(filterValue: string) {
    this.dataSourceP.filter = filterValue.trim().toLowerCase();
  }
  ShowdetailsC(id: number)
  {
    this.router.navigate(['/Accueil/detailcours/' + id]);
  }

}
