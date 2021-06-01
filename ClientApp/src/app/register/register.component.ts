import { WINDOW } from '@ng-toolkit/universal';
import { RegisterService } from "./register.service";
import { Component, OnInit, Output , Inject, Injectable} from '@angular/core';
import { Router } from "@angular/router";
import { HttpHeaders,HttpParams  } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from './theme';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Etablissement } from "./etablissement";
import { Diplome } from "./diplome";
import { first } from "rxjs/operators";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
// tslint:disable-next-line:import-spacing
import { Ville } from'./ville';
import Swal from 'sweetalert2';
import { Niveau } from './niveau';
/** Error when invalid control is dirty, touched, or submitted. */
@Injectable()
export class MyErrorStateMatcher implements ErrorStateMatcher {
 constructor( ) {}

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
  selector: "app-register",
  templateUrl: "./register.component.html",
  providers: [RegisterService],
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  loading = false;
  submitted = false;
  //Password visibility
  hide = true;
  //Etablissements Value
  etablissements: Etablissement[];
  //Diplome Value
  diplomes: Diplome[];
  villes: Ville[];
  Niveau: Niveau[];
  ShwoNiveau: boolean = false;
  ShowVille: boolean = false;
  ShowUN: boolean = false;
  Themes: Theme[];
  Themes2: Theme[];
  customObj: Theme;
  //Checkbox CGU
  checked = false;
  verify = false;
  matcher = new MyErrorStateMatcher();
  profileForm : FormGroup;
  selected = 1;
  c : boolean;
  range: boolean;
  Messagerange: string;
  passwordRegex: any = '^(?=.*?[a-z])(?=.*?[0-9]).{8,20}$' ;
  messageregister: string;
  selectedValue: string;
  fileUrl;
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private fb : FormBuilder, private sanitizer: DomSanitizer, @Inject(WINDOW) private window: Window
    
  ) {}
 
  ngOnInit() {
    this.getEtablissement();
    this.getDiplome();
    this.buildForm();
    this.getVille();
    this.getNiveau();
    this.getTheme();
    this.getTheme2();
    this.range = false;
  }

  someMethod(e: number) {
  
  if ( e === 7) {
    this.ShwoNiveau = true;
  }

}
someMethodVille(e: number) {
  if ( e === 27) {
    this.ShowVille = true;
  }
}
someMethodUNi(e: number) {
  if ( e === 62) {
    this.ShowUN = true;
  }
}
RangeValue(e: number) {
  const index = this.Themes2.findIndex(d => d.Theme_Id === e);
  this.Themes2.splice(index, 1);
  
  this.customObj.Theme_Id = e - 1;
  this.customObj.Theme_Name = (e - 1).toString();
  this.Themes2.push(this.customObj);
  console.log(this.Themes2);
}
  // convenience getter for easy access to form fields
  get f() {
    return this.profileForm.controls;
  }

  formErrors={
    'User_Email':'',
    'User_Password':'',
    'User_Name':'',
    'User_LastName':'',
    'User_Telephone':'',
    'Diplome_Id':'',
    'Etablissement_Id':'',
    'DateNaissance':'',
    'CheckC':'',
    'Question1':'',
    'Question2':'',
    'Question3':'',
    'Question4':'',
  }
  validationMessages={
    'User_Email':{
      'required': 'veuillez entrer votre email',
      'User_Email': 'veuillez entrer un bon email'
    },
    'User_Password':{
      'required':'veuillez saisir un mot de passe',
      'minlength':'veuillez entrer plus 8 caractères',
      'maxlength':'veuillez entrer moins 8  caractères',
      'pattern' :'veuillez entrer des caractères en alpha numérique'
    },
    'User_Name':{
      'required':'veuillez saisir votre nom'
    },
    'User_LastName':{
      'required':'veuillez saisir votre nom'
    },
    'User_Telephone':{
      'required':'veuillez saisir votre phone',
      'maxlength':'il faut saisir 8 chiffres',
      'minlength':'il faut saisir 8 chiffres',
    },
    'passwordConfirm':{
      'required':'veuillez saisir confirmation mot de passe',
    },
    'DateNaissance':{
      'required':'veuillez saisir votre date de naissance',
    },
    'Question1':{
      'required':'veuillez répondre à ce question',
    },
    'Question2':{
      'required':'veuillez répondre à ce question',
    },
    'Question3':{
      'required':'veuillez répondre à ce question',
    },
    'Question4':{
      'required':'veuillez répondre à ce question',
    },
    'CheckC':{
      'required':'Veuillez cocher les conditions de participation et le réglement.',
    }
    
  }


  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;



const theme1  = this.profileForm.get('Theme1').value ;
const theme2 = this.profileForm.get('Theme2').value ;
const theme3 = this.profileForm.get('Theme3').value ;
const theme4 = this.profileForm.get('Theme4').value ;
if ((theme1 === theme2) || (theme2 === theme3) || (theme3 === theme4) || (theme4 === theme1) ||( theme1 ===theme3) ||(theme2===theme4) ) { 
  this.range = true;
  console.log(this.range);
  this.Messagerange = 'Veuillez choisir un seul classement par thème.';
} else {
  this.range = false;
}
if( this.range === false && this.profileForm.valid ) {


    this.loading = true;
    this.registerService
      .register(this.profileForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          // this.alertService.success('Registration successful', true);
         // this.router.navigate(["/avertinscris"]);
         if (data['Success'] === false) {
         this.verify = true;
         console.log('verify:' + this.verify);
         this.messageregister = data['Results'];
         } else {
          this.verify = false;

          Swal(
            'Enregistrement a été effectué !',
            'Veuillez consulter votre mail !',
            'success'
          )
          this.router.navigate(['/home']);
         }
        },
        error => {
          //  this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      this.profileForm.valueChanges.subscribe(data => this.onValueChanged(data));
    
      this.onValueChanged();
    }
    }


  //Subscribe etablissements
  getEtablissement(): void {
    this.registerService
      .getEtablissement()
      .subscribe(etablissements => (this.etablissements = etablissements));
  }
  getTheme(): void {
    this.registerService
      .getTheme()
      .subscribe(theme => (this.Themes = theme));
  }
  getTheme2(): void {
    this.registerService
      .getTheme()
      .subscribe(theme => (this.Themes2 = theme));
  }
  getNiveau(): void {
    this.registerService
      .getNiveau()
      .subscribe(niv => (this.Niveau = niv));
  }
  //Subscribe Diplome
  getDiplome(): void {
    this.registerService
      .getDiplome()
      .subscribe(diplomes => (this.diplomes = diplomes));
  }
  // tslint:disable-next-line:no-unused-expression

  getVille(): void {
    this.registerService
    .getville()
    .subscribe(diplomes => (this.villes = diplomes));
  }
  CloseModal() {

  }
  buildForm() {
    this.profileForm = this.fb.group({
      'User_Email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'User_Password': ['', [
        Validators.pattern(this.passwordRegex),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]
      ],
      'User_Name': ['', [
        Validators.required,
      ]
      ],
      
      'User_LastName': ['', [
        Validators.required,
      ]
      ],
      
      'niveau': ['', []
      ],
      'AutreVille': ['', []
      ],
      'User_Telephone': ['', [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]
      ],

    'Etablissement_Id': ['', [
      Validators.required,
    ]
    ],
    'Diplome_Id': ['', [
      Validators.required,
    ]
    ],
     
      'Niveau_ID': ['', [
        Validators.required,
      ]
      ],
      'spécialite': ['', [
        Validators.required,
      ],
      ],
      'universite': ['', [],
      ],
      'Ville_Id': ['', [
        Validators.required,
      ],
      ],
      'DateNaissance': ['', [
        Validators.required,
      ],
      ],
      'Question1': ['', [
        Validators.required,
      ],
      ],
      'Question2': ['', [
        Validators.required,
      ],
      ],
      'Question3': ['', [
        Validators.required,
      ],
      ],
      'Question4': ['', [
        Validators.required,
      ],
      ],
      'diplomme': ['', [
       
      ],
      ],
      'Disponibilte': ['', [
        Validators.required,
      ],
      ],
      'Langues': ['', [
        Validators.required,
      ],
      ],
      'Experiences': ['', [
        Validators.required,
      ],
      ],
      'Theme1': ['', [
        Validators.required,
      ],
      ],
      'Theme2': ['', [
        Validators.required,
      ],
      ],
      'Theme3': ['', [
        Validators.required,
      ],
      ],
      'Theme4': ['', [
        Validators.required,
      ],
      ],
      'CheckC': ['', [
        Validators.requiredTrue,
      ]
      ],

      passwordConfirm: ['', [Validators.required, confirmPassword]]
    });

    this.profileForm.valueChanges.subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.profileForm) {
      return;
    }
    const form = this.profileForm;
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
  DownloadFile() {
   
   this.registerService.getfile('https://innovact-ubci.chifco.com/api/Users/GetFile')
    .subscribe(fileData => 
      {
      const b: any = new Blob([fileData], { type: 'application/pdf' });
      const url = this.window.URL.createObjectURL(b);
        this.window.open(url);
      }
    );
  }
  cocher() {

    this.c = true;
  
  }


}


function confirmPassword(control: AbstractControl)
{
    if ( !control.parent || !control )
    {
        return;
    }

    const password = control.parent.get('User_Password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return;
    }

    if ( passwordConfirm.value === '' )
    {
        return;
    }

    if ( password.value !== passwordConfirm.value )
    {
        return {
            passwordsNotMatch: true
        };
    }
}


