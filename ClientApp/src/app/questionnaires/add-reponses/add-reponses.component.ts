import { Component, OnInit, Inject , ViewChild , Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
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
import { Questionnaire } from '../questionnaire';
import { Question } from '../question';
import { QuestionnaireService } from '../questionnaire.service' ;
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
  qst: Question;
  title: string;
}
@Component({
  selector: 'app-add-reponses',
  templateUrl: './add-reponses.component.html',
  styleUrls: ['./add-reponses.component.scss']
})
export class AddReponsesComponent implements OnInit {
  reponsesForm = new FormGroup({

    Text: new FormControl('', [Validators.required]),
    Question_ID: new FormControl('', []),
    Designation: new FormControl('', [])

  });
  loading = false;
  submitted = false;
  checked = false;
  constructor(private _questionnaireService: QuestionnaireService,
    private router: Router,
    private _avRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<AddReponsesComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onSubmitR() {
    console.log(this.reponsesForm.value);
    this.submitted = true;

    this.loading = true;
    this._questionnaireService
      .createreponse(this.reponsesForm.value, this.data.qst.Question_ID)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
         console.log(data);

          // this.router.navigate(['/questionnaire/list-question/' + this.data.id]);
          this.dialogRef.close();

        },
        error => {
          //  this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  onClose() {
    this.dialogRef.close();
  }
}
