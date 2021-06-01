import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators, AbstractControl , ValidatorFn, ValidationErrors

} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import {ProjetService} from '../_services/projet.service';
import {Projet} from '../_models/projet';
import {Gategorie} from '../_models/gategorie';
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
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
 ProjectForm: FormGroup ;

  loading = false;
  submitted = false;
  checked = false;
  token = '8c416ce4-b8eb-466b-91a4-3d6756d13fb2';
  listCategorie: Gategorie[];
  constructor(private router: Router, private _projetService: ProjetService, private fb: FormBuilder,  private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCategorie();
    this.ProjectForm = this.fb.group({
      Projet_Name: new FormControl('', [Validators.required]),
      Projet_Description: new FormControl('', []),
      Projet_Date_Debut: new FormControl('', [Validators.required]),
      Projet_Date_Cloture: new FormControl('', Validators.compose([ Validators.required]) ),
      Categorie_Id: new FormControl('', [Validators.required]),
      Categorie : new FormControl('', []),
    },
    {
      validator: this.checkDate,

    }
  );
  }
  getAllCategorie() {
    this._projetService.getListCategorie().subscribe(
      QStLists => this.listCategorie = QStLists );
  }
  checkDate(control: FormControl):  boolean  {

    if (control.get('Projet_Date_Debut') != null && control.get('Projet_Date_Cloture') != null ) {
    const d1 = new Date(control.get('Projet_Date_Debut').value);

    const d2 = new Date(control.get('Projet_Date_Cloture').value);
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

onSubmitPrix() {

  this._projetService.AddProjet
    (this.ProjectForm.value, this.token)
    .pipe(first())
    .subscribe(
      data => {
        // this.alertService.success('Registration successful', true);
        this.router.navigate(['/Projets']);
      },
      error => {
        //  this.alertService.error(error);

      }
    );
}
CloseProject() {
  this.router.navigate(['/Projets']);
}
}
