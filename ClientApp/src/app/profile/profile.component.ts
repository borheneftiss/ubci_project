import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';

import { User } from '../register/user';
import { Etablissement } from "../register/etablissement";
import { Diplome } from '../register/diplome';
import { Niveau } from '../register/niveau';

import { RegisterService } from "../register/register.service";
import Swal from 'sweetalert2';
import {ChangeMpComponent} from '../popup/change-mp/change-mp.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType, HttpResponse  } from '@angular/common/http';
import { Profile} from './_models/profile';
import {ProfileService} from './_services/profile.service';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService, RegisterService],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ShowButton = false;
 profile: Profile;
  user : any = new User() ;
  etablissements: Etablissement[];
  diplome: Diplome[];
  Niveau: Niveau[];
  genre_tab = ['Homme', 'Femme'];
  test:any
 token: string;
 updateForm : FormGroup;
  submitted = false;
  loading = false;
  selectedFile: File;
 url:string;

 public progress: number;
  public message: string;
 


  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,private http: HttpClient, 
    private profileService: ProfileService,
    private registerService: RegisterService,
    private router: Router,
    private fb : FormBuilder,
    private dialog: MatDialog

  ) {
    this.token = this.localStorage.getItem('token');
   

   }

   upload(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of files) {
      const ext = file.name.match(/\.(.+)$/)[1];

    switch (ext) {
        case 'JPG':
        case 'JPEG':
        case 'PNG':
        case 'GIF':
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':


        formData.append(file.name, file);
            break;
        default:
            Swal('Veuillez choisir un type de format image:JPG,JPEG,PNG,GIF')

    }
      
    }
    
    const uploadReq = new HttpRequest('POST', 'https://innovact-ubci.tn/api/Users/UploadImageProfil?token=' + this.token, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.getProfile(this.token);
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
             }
    });
  }
/*onFileChanged(event) {
  this.selectedFile = event.target.files[0]
  console.log(this.selectedFile)
  console.log(this.selectedFile.name)
  this.url_image=this.selectedFile.name;
  console.log(this.url_image)  
  this.ShowButton=true
}*/

onSelectFile(event) { // called each time file input changes
  this.selectedFile = event.target.files[0]
  console.log(this.selectedFile)
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target["result"];
    
      }
    }
    this.ShowButton=true
}





  getProfile(token: string) {
    this.profileService.getUserProfil(token).subscribe(
        data => { this.profile = data;
          this.url = 'https://innovact-ubci.tn/Content/images/Profil/' +  this.profile.photo;
        }
    );
}

  ngOnInit() {
   // this.getEtablissement();
  //  this.getDiplome();
   // this.getNiveau();
   this.token = this.localStorage.getItem('token');
    this.getProfile(this.token);
   
  }

  ShowPoupMD(){
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '75vh';
    this.dialog.open(ChangeMpComponent, dialogConfig);
  }


  getEtablissement(): void {
    this.registerService
      .getEtablissement()
      .subscribe(etablissements => (
        this.etablissements = etablissements
        ));
  }

  getDiplome(): void {
    this.registerService
      .getDiplome()
      .subscribe(diplome => (
        this.diplome = diplome
        ));
  }

  getNiveau(): void {
    this.registerService
      .getNiveau()
      .subscribe(niv => (this.Niveau = niv));
  }

}
