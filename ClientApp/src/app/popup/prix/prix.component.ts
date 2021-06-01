import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.scss']
})
export class PrixComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PrixComponent>, private router: Router) { }

  ngOnInit() {
  }
  CloseModal() {
    this.dialogRef.close();
  }
}
