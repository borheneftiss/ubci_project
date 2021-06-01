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
import {Status } from '../Status';
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
export interface DialogDataEdit {
  qst: Question;
  dataSource;
  title: string;
}

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  @Input() qst: Question;
  Status: Status[];
  questionFormEdit = new FormGroup({

    Text: new FormControl('', [Validators.required]),
    Type: new FormControl('', [Validators.required]),

    Question_ID: new FormControl('', []),
    Questionnaire_ID: new FormControl('', []),
    questionnaire: new FormControl('', []),
    CreatedAt: new FormControl('', []),
    AllReponses: new FormControl('', []),
    Status: new FormControl('', [Validators.required]),
  });
  loading = false;
  submitted = false;
  checked = false;
  matcher = new MyErrorStateMatcher();
  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router,
    private _avRoute: ActivatedRoute,
    public dialogRefE: MatDialogRef<EditQuestionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogDataEdit
  ) {
    }
    getStatus() {
      this._questionnaireService.getStatus().subscribe(datas => this.Status = datas);
    }
  ngOnInit() {
    this.getStatus();
    console.log(this.data.qst);
    this.questionFormEdit.setValue(this.data.qst);
  }
  onClose() {
    this.dialogRefE.close();
  }
  refresh() {
    this._questionnaireService.getListQuestionsById(this.data.qst.Questionnaire_ID).subscribe(datas => {
     console.log(this.data.dataSource);

      this.data.dataSource.data = datas;
      console.log(this.data.dataSource);
     });
  }
  onSubmitE() {
    console.log(this.questionFormEdit.value);
    this.submitted = true;

    this.loading = true;
    this._questionnaireService
      .Updatequestion(this.questionFormEdit.value)
      .pipe(first())
      .subscribe(
        data => {

         console.log(data);
this.refresh();
          this.dialogRefE.close();

        },
        error => {
          //  this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
