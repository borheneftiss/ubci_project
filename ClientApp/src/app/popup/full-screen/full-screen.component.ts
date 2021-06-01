import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss'],
 

})
export class FullScreenComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FullScreenComponent>, private router: Router) { }

  ngOnInit() {
  }

}
