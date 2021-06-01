import { Component, OnInit, Inject } from '@angular/core';
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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {TypePrix } from '../_models/type-prix';
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
  Concour: Concour;
  title: string;
}
@Component({
  selector: 'app-add-prix',
  templateUrl: './add-prix.component.html',
  styleUrls: ['./add-prix.component.scss']
})

export class AddPrixComponent implements OnInit {
  PrixForm: FormGroup ;
  Types: TypePrix[];
  constructor(private router: Router, private _councoursService: CouncoursService, private fb: FormBuilder ,
    private dialogRef: MatDialogRef<AddPrixComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit() {
    this.getTypes();
    this.PrixForm = this.fb.group({
      Prix_Valeur: new FormControl('', [Validators.required]),
      PrixType_Id: new FormControl('', [Validators.required]),
    }
  );
  }
  onClose() {
    this.dialogRef.close();
  }
  getTypes() {
    this._councoursService.getTypePrix().subscribe(datas => this.Types = datas);
  }
  onSubmitPrix() {
    console.log(this.PrixForm.value);

    this._councoursService.AddPrix
      (this.PrixForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
         // this.router.navigate(['/concours']);
        },
        error => {
          //  this.alertService.error(error);

        }
      );
  }
}
