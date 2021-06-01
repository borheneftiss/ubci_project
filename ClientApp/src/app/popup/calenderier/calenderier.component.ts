import { Component, OnInit } from '@angular/core';import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-calenderier',
  templateUrl: './calenderier.component.html',
  styleUrls: ['./calenderier.component.scss']
})
export class CalenderierComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CalenderierComponent>, private router: Router) { }

  ngOnInit() {
  }
  CloseModal() {
    this.dialogRef.close();
  }

}
