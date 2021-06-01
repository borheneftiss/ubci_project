import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType, HttpResponse  } from '@angular/common/http';
import {CoursService} from '../_services/cours.service';
import {FileCours} from '../_models/file-cours';
import {StatusCours} from '../_models/status-cours';
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
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.scss']
})
export class AddCoursComponent implements OnInit {
  public files: UploadFile[] = [];
  public courfile: FileCours[];
  public listSatus: StatusCours[];
  CoursForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['text', 'categorie', 'dateDEb', 'NEXpert', 'ac1' ];
  constructor(private router: Router, private http: HttpClient, private _coursservice: CoursService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getLListSatus();
    this.CoursForm = this.fb.group({
      Cours_Title: new FormControl('', [Validators.required]),
      Cours_Type: new FormControl('', []),
      StatusCours_Id: new FormControl('', [Validators.required]),
      Cours_Description: new FormControl('', Validators.compose([ Validators.required]) ),

    },

  );
  }
  uploadV(files){
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of files) {
      const ext = file.name.match(/\.(.+)$/)[1];

          switch (ext) {
              case 'WAV':
              case 'GIF':
              case 'gif':
              case 'MID':
              case 'mid':
              case 'mp3':
              case 'MP3':
              case 'ogg':
              case 'OGG':
              case 'rma':
              case 'RMA':
              case 'avi':
              case 'AVI':
              case 'mp4':
              case 'MP4':
              case 'divx':
              case 'DIVX':
              case 'wmv':
              case 'WMV':
      formData.append(file.name, file);
      break;
      default:
          Swal('Veuillez choisir un type de format vidéo');

  }
    }

    const uploadReq = new HttpRequest('POST', 'https://innovact-ubci.tn/api/Workshop/UploadFileDocument', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      this.getLListfile();
    });
  }

  uploadPDF(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of files) {
      const ext = file.name.match(/\.(.+)$/)[1];

          switch (ext) {
              case 'PDF':
              case 'pdf':

      formData.append(file.name, file);
      break;
      default:
          Swal('Veuillez choisir un type de format document pdf');

  }
    }

    const uploadReq = new HttpRequest('POST', 'https://innovact-ubci.tn/api/Workshop/UploadFileDocument', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      this.getLListfile();
    });
  }
  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const ext = file.name.match(/\.(.+)$/)[1];

          switch (ext) {
              case 'PDF':
              case 'pdf':
              case 'WAV':
              case 'GIF':
              case 'gif':
              case 'MID':
              case 'mid':
              case 'mp3':
              case 'MP3':
              case 'ogg':
              case 'OGG':
              case 'rma':
              case 'RMA':
              case 'avi':
              case 'AVI':
              case 'mp4':
              case 'MP4':
              case 'divx':
              case 'DIVX':
              case 'wmv':
              case 'WMV':


              const formData = new FormData();
              formData.append('logo', file, droppedFile.relativePath );

              // Headers

              this.http.post('https://innovact-ubci.tn/api/Workshop/UploadFileDocument', formData, {  responseType: 'blob' })
              .subscribe(data => {
                // Sanitized logo returned from backend
                this.getLListfile();
              });
                  break;
              default:
                  Swal('Veuillez choisir un type de format document pdf ou vidéo');
      
          }
          // Here you can access the real file
         // console.log(droppedFile.relativePath, file);
   


        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  getLListfile() {
    this._coursservice.getListFile().subscribe(
      QStLists => this.courfile = QStLists
  );
  }
  getLListSatus() {
    this._coursservice.getListSatus().subscribe(
      QStLists => this.listSatus = QStLists
  );
  }
  onSubmitPCours() {

  this._coursservice.AddCours
  (this.CoursForm.value)

  .subscribe(
    data => {
      // this.alertService.success('Registration successful', true);
      this.router.navigate(['/Accueil/cours']);
    },
    error => {
      //  this.alertService.error(error);

    }
  );
  }
  deleteFileCours(id: number) {
    this._coursservice.delteFileCours(id)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.getLListfile();
        },
        error => {
          //  this.alertService.error(error);

        }
      );
    }
    CloseCours() {
      this._coursservice.ResetFiles()
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/Accueil/cours']);
        },
        error => {
          //  this.alertService.error(error);

        }
      );

    }
   

}
