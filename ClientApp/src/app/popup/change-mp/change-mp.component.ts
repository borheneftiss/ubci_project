import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators, AbstractControl , ValidatorFn, ValidationErrors

} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {ProfileService} from '../../../app/profile/_services/profile.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
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
  selector: 'app-change-mp',
  templateUrl: './change-mp.component.html',
  styleUrls: ['./change-mp.component.scss']
})
export class ChangeMpComponent implements OnInit {
  MDPForm: FormGroup ;
  token: string;
  passwordRegex: any = '^(?=.*?[a-z])(?=.*?[0-9]).{8,20}$' ;

  formErrors = {
    'AncienMDP': '',
    'NewMDP': '',
    'ConfirmNewMDP': '',

  };
  validationMessages = {
    'AncienMDP': {
      'required': 'veuillez saisir votre mot de passe'
    },

    'NewMDP': {
      'required': 'veuillez saisir un mot de passe',
      'minlength': 'veuillez entrer plus 8 caractères',
      'maxlength': 'veuillez entrer moins 8  caractères',
      'pattern' : 'veuillez entrer des caractères en alpha numérique'
    },

    'ConfirmNewMDP': {
      'required': 'veuillez saisir la confirmation de mot de passe',
    },

  };
  constructor(private fb: FormBuilder, @Inject(LOCAL_STORAGE) private localStorage: any,
    private dialog: MatDialog, private router: Router, private _profileService: ProfileService ) {

    this.token = this.localStorage.getItem('token');
   }

  ngOnInit() {
    this.MDPForm = new FormGroup({
      AncienMDP: new FormControl('', [Validators.required]),
      NewMDP: new FormControl('', [Validators.pattern(this.passwordRegex),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)]),
        ConfirmNewMDP: new FormControl('', [Validators.required, confirmPassword]),

    },

  );
  this.MDPForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.MDPForm) {
      return;
    }
    const form = this.MDPForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
confirmYourPassword(control: AbstractControl) {
  const password = control.parent.get('AncienMDP');
  if ( !control.parent || !control ) {
          return;
      }
      return {
        passwordsNotMatch: true
    };

  }



  onSubmitMDP() {

  this._profileService.ChangePSW
    (this.MDPForm.value, this.token, )

    .subscribe(
      data => {
        // this.alertService.success('Registration successful', true);

       if ( data['Success'] === true) {
        Swal(
          'Votre mot de passe est modifié avec success!',

        );
        this.dialog.closeAll();
       } else {
        Swal(
          data['Results']

        );
       }

      },
      error => {
        //  this.alertService.error(error);

      }
    );
}
}
function confirmPassword(control: AbstractControl) {
  if ( !control.parent || !control ) {
      return;
  }

  const password = control.parent.get('NewMDP');
  const passwordConfirm = control.parent.get('ConfirmNewMDP');

  if ( !password || !passwordConfirm ) {
      return;
  }

  if ( passwordConfirm.value === '' ) {
      return;
  }

  if ( password.value !== passwordConfirm.value ) {
      return {
          passwordsNotMatch: true
      };
  }
}
