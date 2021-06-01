import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import {ProjetService } from '../_services/projet.service';
import { Projet } from '../_models/projet';
import { rowsAnimation } from './annimation';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  animations: [rowsAnimation],
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {
  selectedRow;
  public dataSourceP =  new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'categorie', 'dateDEb', 'dateDCloture', 'ac1', 'ac2', 'ac3' ];
  constructor(private _projetService: ProjetService,
    private router: Router) { }
    selectRow(row) {
      this.selectedRow = row;
      // more stuff to do...
  }
    ngOnInit() {
      this.dataSourceP.paginator = this.paginator;
      this.getLListProjets();
    }
    getLListProjets() {
      this._projetService.getListProjet().subscribe(
          QStLists => this.dataSourceP.data = QStLists
      );
  }
  applyFilter(filterValue: string) {
    this.dataSourceP.filter = filterValue.trim().toLowerCase();
  }
  addQNewProject() {
    this.router.navigate(['/Projets/add']);
  }
  deleteProject(_projet: Projet) {
    const ans = confirm('Voulez vous supprimer ce projet: ' + _projet.Projet_Name);
    if (ans) {
        this._projetService.deleteProjet(_projet.Projet_Id).subscribe((data) => {
            this.getLListProjets();
        });
    }
  }
  Editproject(_projet: Projet){
    this.router.navigate(['/Projets/edit/' + _projet.Projet_Id]);
  }
  AddQuestByProject(_projet: Projet) {
    this.router.navigate(['/questionnaire/' + _projet.Projet_Id]);
  }
}
