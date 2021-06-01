import { Component, OnInit, Inject , ViewChild , Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {UsersService } from '../_services/users.service';
import {User} from '../_models/user';
import {Questionnaire} from '../_models/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,

} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
export interface DialogData {
  id: number;

  title: string;
}
@Component({
  selector: 'app-sending',
  templateUrl: './sending.component.html',
  styleUrls: ['./sending.component.scss']
})

export class SendingComponent implements OnInit {
  FormSending: FormGroup ;
  questionnaire: Questionnaire[];
  user_Id: number; 
  constructor(private _usersService: UsersService, private router: Router,
    private _avRoute: ActivatedRoute, private fb: FormBuilder,
    private dialogRef: MatDialogRef<SendingComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
          this.user_Id = data.id;
         }

  ngOnInit() {
    this.FormSending = this.fb.group({
      Description: new FormControl('', [Validators.required]),
      Questionnaire_ID: new FormControl('', []),

    },

  );
  this.getAllQuestionnaire();
  }
  onClose() {
    this.dialogRef.close();
  }
  getAllQuestionnaire() {
    this._usersService.getQuestionnaire().subscribe(
      data => this.questionnaire = data
  );
  }
  onSubmit() {

    this._usersService.SendQuestionnaire
      (this.FormSending.value, this.user_Id)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);

        },
        error => {
          //  this.alertService.error(error);

        }
      );
  }
}
