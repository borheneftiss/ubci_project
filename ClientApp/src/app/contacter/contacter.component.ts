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
import {Contact} from './Contact';
import {ContactService} from './contact.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.component.html',
  styleUrls: ['./contacter.component.scss']
})

export class ContacterComponent implements OnInit {

  ContactForm: FormGroup ;

  loading = false;
  submitted = false;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private _contactService: ContactService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.ContactForm = this.fb.group({
      Contact_Nom: new FormControl('', [Validators.required]),
      Contact_Prenom: new FormControl('', [Validators.required]),
      Contact_Telephone: new FormControl('', [Validators.required]),
      Contact_Email: new FormControl('',[Validators.required, Validators.email] ),
      Objet_Message: new FormControl('', []),
      Cors_Message : new FormControl('', []),
    },

  );
  }
  onSubmitContact() {

    this._contactService.AddContact
      (this.ContactForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/home']);
         
        },
        error => {
          //  this.alertService.error(error);
  
        }
      );
  }
  
}
