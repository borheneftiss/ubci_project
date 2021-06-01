import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
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

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  Status: Status[];
    QSTFormEdit = new FormGroup({
    Questionnaire_ID: new FormControl('', []),
    Name: new FormControl('', [Validators.required]),
    Type: new FormControl('', [Validators.required]),
    StartPublication: new FormControl('', [Validators.required]),
    EndPublication: new FormControl('', [Validators.required]),
    Description: new FormControl('', []),
    Status_Id: new FormControl('', [Validators.required]),
      });
  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router ,
    private _avRoute: ActivatedRoute,
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.id = this._avRoute.snapshot.params['id'];
       }
  }

  ngOnInit() {
this.getStatus();
    this._questionnaireService.getQuestionnaireById(this.id)
    .subscribe( data => {
      this.QSTFormEdit.setValue(data);
    });
  }
  getStatus() {
    this._questionnaireService.getStatus().subscribe(datas => this.Status = datas);
  }
  ShowList() {
    this.router.navigate(['/questionnaire']);
  }
  onSubmit() {
    this._questionnaireService.updateQST(this.QSTFormEdit.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/questionnaire']);
        },
        error => {
          alert(error);
        });
  }
}
