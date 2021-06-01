import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import {
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  FormArray,
  AbstractControl
} from "@angular/forms";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  ForgetPassword: FormGroup;
  loading = false;
  submitted = false;
  showlogMessage = false;
  ShowResetMessage = false;
  MessageError: string;
  showFiller= false;
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  


  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    private loginService: LoginService,
    private router: Router,
    private fb : FormBuilder, private auth: AuthService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
      //Password: new FormControl("", [Validators.required]),
      Password: new FormControl("", [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])

    });
    this.ForgetPassword = new FormGroup({
      forgetemail: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),

    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ngOnInit() {

  }

  formErrors={
    'email':'',
  }
  validationMessages={
    'email':{
      'required': 'veuillez entrer votre email',
      'email': 'veuillez entrer un bon email'
    },
    'Password':{
      'required':'veuillez saisir un mot de passe',
      'minlength':'veuillez entrer plus 4 caractères',
      'maxlength':'veuillez entrer moins 8 caractères',
      'pattern' :'veuillez entrer des nombres '
    },
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
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

  onSubmit() {
    console.log(this.loginForm.value);
    this.submitted = true;
    this.loading = true;
    this.loginService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {


          if(data['Success'] === true) {
            this.auth.sendToken( data['Results'].token);
           // localStorage.setItem('token', data["Results"].token);
            const token = this.localStorage.getItem('token');

            this.localStorage.setItem('periode', data["Results"].Periode);
            const periode = this.localStorage.getItem('periode');
           const role = data['Results'].Role;
           this.auth.sendRole( data['Results'].Role);

           this.localStorage.setItem('role', JSON.stringify(role));
            const time_to_login = Date.now();
            this.localStorage.setItem('timer', JSON.stringify(time_to_login));

            const timer = JSON.parse(this.localStorage.getItem('timer'));

           // this.router.navigate(['/home']);
            if (role === 2) {
              this.router.navigate(['/Accueil/profile']);
             // this.router.navigate(['/questionnaire/Quiz/1020/' + data['Results'].token]);
            }
               else{
                this.router.navigate(['/Accueil/profile']);
               }
          } else {

            this.showlogMessage = true;
            this.MessageError = data['Results'];
          }


        },
        error => {
        }
      );
    }


    ResetPassword() {
      this.loginService
      .ResetPassword(this.ForgetPassword.get('forgetemail').value)
      .pipe(first())
      .subscribe(
        data => {
          if ( data['Success'] === false) {
            this.ShowResetMessage = true;
          } else {
            Swal(
              'Votre mot de passe a éte réinitialisé.',
              'Veuillez consulter votre mail !',
              'success'
            )
     this.showFiller = false;
          }
          console.log(data);
        });


    }


}
