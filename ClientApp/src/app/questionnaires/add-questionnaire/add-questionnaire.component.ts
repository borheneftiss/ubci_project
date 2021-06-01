import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.scss'],
  providers: [QuestionnaireService],
})
/** Error when invalid control is dirty, touched, or submitted. */

export class AddQuestionnaireComponent implements OnInit {
  QSTForm = new FormGroup({

    Name: new FormControl("", [Validators.required]),
    Type: new FormControl("", [Validators.required]),
    StartPublication: new FormControl("", [Validators.required]),
    EndPublication: new FormControl("", [Validators.required]),
    Description: new FormControl("",[]),
    Status_Id: new FormControl("",[Validators.required])
  });
  loading = false;
  submitted = false;
  checked = false;
  id: number;
  Status: Status[];
  matcher = new MyErrorStateMatcher();
  constructor(
    private _questionnaireService: QuestionnaireService,
    private router: Router,

  ) {

   }

  ngOnInit() {
    this.getStatus();
  }
  getStatus() {
    this._questionnaireService.getStatus().subscribe(datas => this.Status = datas);
  }
  onSubmit() {
    console.log(this.QSTForm.value);
    this.submitted = true;

    this.loading = true;
    this._questionnaireService
      .createQST(this.QSTForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/questionnaire']);
        },
        error => {
          //  this.alertService.error(error);
          this.loading = false;
        }
      );
  }

}
