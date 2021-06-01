import { Component, OnInit, Inject , ViewChild , Input, Output } from '@angular/core';
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
import {MessagesService } from '../../../../app/messages/_services/messages.service';
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
  message: string;
}
@Component({
  selector: 'app-send-ing',
  templateUrl: './send-ing.component.html',
  styleUrls: ['./send-ing.component.scss']
})
export class SendIngComponent implements OnInit {

  SendingForm: FormGroup ;
  constructor(
    private router: Router,
    private _avRoute: ActivatedRoute, private fb: FormBuilder,
    private dialogRef: MatDialogRef<SendIngComponent>, private _contactService: MessagesService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {


   }

  ngOnInit() {
    this.SendingForm = this.fb.group({

      Text: new FormControl('', [Validators.required]),


    });
  }
  onClose()
  {
    this.dialogRef.close();
  }
  onSubmitSending()
  {
  const message = this.SendingForm.get('Text').value;
    this._contactService
      .SendMessage(this.data.id, message)
      .pipe(first())
      .subscribe(
        data => {

         console.log(data);

          this.dialogRef.close();

        },
        error => {

        }
      );
  }
}
