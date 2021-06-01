import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {Concour } from '../_models/concour';
import { CouncoursValidators } from '../_validators/councours-validators';
import {MatListModule} from '@angular/material/list';
import {Prix } from '../_models/prix';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators, AbstractControl , ValidatorFn, ValidationErrors

} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CouncoursService } from '../_services/councours.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { AddPrixComponent} from '../add-prix/add-prix.component';
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  ConcoursForm: FormGroup ;

  loading = false;
  submitted = false;
  checked = false;
  listPrix: Prix[];
  constructor(private router: Router, private _councoursService: CouncoursService, private fb: FormBuilder,  private dialog: MatDialog) { }

  ngOnInit() {
    this.ConcoursForm = this.fb.group({
      Concours_Title: new FormControl('', [Validators.required]),
    Concours_Description: new FormControl('', []),
    Concours_DateDebut: new FormControl('', [Validators.required]),
    Concours_DateCloture: new FormControl('', Validators.compose([ Validators.required]) ),
    Concours_Date1Selection: new FormControl('',[]),
    Concours_Date2Selection: new FormControl('',[]),
    Concours_DateFinale: new FormControl('',[])
    },
    {
      validator: this.checkDate,

    }
  );
  }
  getListofConcours() {
    this._councoursService.getListPrixForAdd().subscribe(
      QStLists => this.listPrix = QStLists
  );
  }
  onSubmit() {
    console.log(this.ConcoursForm.value);
    this.submitted = true;

    this.loading = true;
    this._councoursService.AddConcours
      (this.ConcoursForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/concours']);
        },
        error => {
          //  this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  checkDate(control: FormControl):  boolean  {

    if (control.get('Concours_DateDebut') != null && control.get('Concours_DateCloture') != null ) {
    const d1 = new Date(control.get('Concours_DateDebut').value);

    const d2 = new Date(control.get('Concours_DateCloture').value);
    console.log(d1);
    console.log(d2);

    if ( d1 > d2 ) {
    console.log('ok');

        return  true;
      } else {
        console.log('notok');

  return null;
}
    } else {
      console.log('not ok');
  return null;
}

}
checkDate1S(control: FormControl):  boolean  {

  if (control.get('Concours_Date1Selection') != null && control.get('Concours_DateCloture') != null ) {
  const d1 = new Date(control.get('Concours_DateCloture').value);

  const d2 = new Date(control.get('Concours_Date1Selection').value);
  console.log(d1);
  console.log(d2);

  if ( d1 > d2 ) {
  console.log('ok');

      return  true;
    } else {
      console.log('notok');

return null;
}
  } else {
    console.log('not ok');
return null;
}

}
checkDate2S(control: FormControl):  boolean  {

  if (control.get('Concours_Date1Selection') != null && control.get('Concours_Date2Selection') != null ) {
  const d1 = new Date(control.get('Concours_Date1Selection').value);

  const d2 = new Date(control.get('Concours_Date2Selection').value);
  console.log(d1);
  console.log(d2);

  if ( d1 > d2 ) {
  console.log('ok');

      return  true;
    } else {
      console.log('notok');

return null;
}
  } else {
    console.log('not ok');
return null;
}

}
checkDateF(control: FormControl):  boolean  {

  if (control.get('Concours_DateFinale') != null && control.get('Concours_Date2Selection') != null ) {
  const d1 = new Date(control.get('Concours_Date2Selection').value);

  const d2 = new Date(control.get('Concours_DateFinale').value);
  console.log(d1);
  console.log(d2);

  if ( d1 > d2 ) {
  console.log('ok');

      return  true;
    } else {
      console.log('notok');

return null;
}
  } else {
    console.log('not ok');
return null;
}

}
OpenModalprix() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(AddPrixComponent, dialogConfig);
}
}

