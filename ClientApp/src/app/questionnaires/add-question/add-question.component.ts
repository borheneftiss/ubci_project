import { Component, OnInit, Inject , ViewChild , Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {Status } from '../Status';
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
  id: number;
  dataSource;
  title: string;
}
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})

export class AddQuestionComponent implements OnInit {
 
  loading = false;
  submitted = false;
  checked = false;
 
   idQ: number;
   Status: Status[];
   questionForm: FormGroup ;
  @Input() dataSourceQ =  new MatTableDataSource();
   @Input() id: number;
   matcher = new MyErrorStateMatcher();
  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router,
    private _avRoute: ActivatedRoute, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddQuestionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.idQ = this._avRoute.snapshot.params['id'];

       }
    }
    getStatus() {
      this._questionnaireService.getStatus().subscribe(datas => this.Status = datas);
    }
  ngOnInit() {
    console.log(this.data.id);
    
   this.questionForm = this.fb.group({

      Text: new FormControl('', [Validators.required]),
      Type: new FormControl('', [Validators.required]),
      Status: new FormControl('', [Validators.required]),

    });
    this.getStatus();
  }
  refresh() {
    this._questionnaireService.getListQuestionsById(this.data.id).subscribe(datas => {
     console.log(this.data.dataSource);

      this.data.dataSource.data = datas;
      console.log(this.data.dataSource);
     });
  }
 
  onSubmit() {
    console.log(this.questionForm.value);
    this.submitted = true;

    this.loading = true;
    this._questionnaireService
      .createquestion(this.questionForm.value, this.data.id)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
         console.log(data);
         this.refresh();
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
