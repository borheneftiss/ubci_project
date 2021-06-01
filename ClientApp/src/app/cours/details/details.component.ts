import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {CoursService} from '../_services/cours.service';
import {FileCours} from '../_models/file-cours';
import {Cours} from '../_models/cours';
import {PopupvideoComponent} from '../popupvideo/popupvideo.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public dataSourcefile =  new MatTableDataSource();
  courfile: FileCours[];
  cours: Cours;
   id: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text',  'ac1' ];
  constructor(private _coursservice: CoursService,private http: HttpClient ,private router: Router, 
    private _avRoute: ActivatedRoute,  private dialog: MatDialog
    ) { 
    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
      
       }

  }

  ngOnInit() {
    this.getListfileBycours(this.id);
    this.getcours(this.id);
  }
  getListfileBycours(id: number) {
    this._coursservice.getListFileBycours(id).subscribe(
      QStLists => {
        this.dataSourcefile.data = QStLists;
      this.courfile = QStLists;
      }
  );
  }
  getcours(id: number) {
    this._coursservice.getBycours(id).subscribe(
      QStLists => {
        
      this.cours = QStLists;
      }
  );
  }
  downloadFile(path: string)
  {
    const url = 'https://innovact-ubci.tn/Content/images/Cours/'+ path;
    const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        
        a.target = '_self';
        a.download = path;
        a.href = url;
        a.click();
        
        a.remove();
  }
  ShowVideo(path: string) {
    const dialogConfigE = new MatDialogConfig();

    dialogConfigE.disableClose = false;
    dialogConfigE.autoFocus = false;
  dialogConfigE.width = '80vh';

    dialogConfigE.data = {
     path: path,
   
     title: 'Angular For Beginners'
 };

 this.dialog.open(PopupvideoComponent, dialogConfigE);
  }
}
