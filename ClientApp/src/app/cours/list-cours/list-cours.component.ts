import { Component, OnInit, ViewChild } from '@angular/core';
import { rowsAnimation } from './annimation';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {CoursService} from '../_services/cours.service';
import {Cours} from '../_models/cours';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  animations: [rowsAnimation],
  styleUrls: ['./list-cours.component.scss']
})
export class ListCoursComponent implements OnInit {
  selectedRow;
  public dataSourceP =  new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'categorie', 'dateDEb', 'NEXpert', 'ac1' ];

  constructor(private _coursservice: CoursService, private router: Router) { }
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
  addQNewCours()
  {
    this.router.navigate(['/Accueil/addcours']);
  }
  deleteCours(_cours: Cours) {
    Swal(
      {
        title: 'Suppression?',
        text: 'Voulez vous supprimer ce cour: ' + _cours.Cours_Title,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Ok!'
      }).then((result) => {
        if (result.value) {
          this._coursservice.deleteCours(_cours.Cours_Id).subscribe((data) => {
            this.getLListCours();
        });
          Swal(
            'Suppression!',
            'Votre cours a été supprimer .',
            'success'
          );
        }
      }
    );
  }
  EditerCours(_cours: Cours) {
    this.router.navigate(['/Accueil/Editcours/' + _cours.Cours_Id]);
  }
}
