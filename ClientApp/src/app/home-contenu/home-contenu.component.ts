import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import {RegisterComponent} from '../register/register.component';
import {ContacterComponent} from '../contacter/contacter.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { ThemeComponent } from '../popup/theme/theme.component';
import { EquipeComponent } from '../popup/equipe/equipe.component';
import { PrixComponent } from '../popup/prix/prix.component';
import {CalenderierComponent} from '../popup/calenderier/calenderier.component';
import { OverlayModule } from '@angular/cdk/overlay';

import { QuestionnaireService } from '../../app/questionnaires/questionnaire.service';
@Component({
  selector: 'app-home-contenu',
  templateUrl: './home-contenu.component.html',
  styleUrls: ['./home-contenu.component.scss']
})
export class HomeContenuComponent implements OnInit {

  checked : Boolean;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    private router: Router, private auth: AuthService,  private dialog: MatDialog , private questionnaire: QuestionnaireService,
  ) { }

  ngOnInit() {
    if (this.auth.isLoggednIn()) {
      this.CheckResult(this.localStorage.getItem('token'), 1020);
    } else {
      this.checked = false;
    }

  }
CheckResult(token: string, id: number) {

        this.questionnaire.CheckResult(token, id).subscribe(
          data => {

           if ( data['Success'] === true) {
            this.checked = true;
           } else {
            this.checked = false;
           }
          }
        );
        }

  test() {

    const timer = JSON.parse(this.localStorage.getItem('timer'));
    const periode = JSON.parse(this.localStorage.getItem('periode'));
    console.log(timer)
    console.log(periode)
    const convert = periode*60000;
    console.log(convert)
    console.log(Date.now())
        if (Date.now() > (timer+convert)) {
          this.router.navigate(['/login']);
          this.localStorage.setItem('token', "")
        }

}
deconnection(){
this.router.navigate(["/login"]);
}


CloseModalFull(){
  this.dialog.closeAll();
}
ShowModalInscription() {
  this.router.navigate(['/register']);
}
ShowModalResultat() {
  this.router.navigate(['questionnaire/Resultat/1020/' + this.localStorage.getItem('token')]);
}
ShowModalQuiz(){
  this.router.navigate(['questionnaire/Quiz/1020/' + this.localStorage.getItem('token')]);
}
ShowModalContacter(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;

  this.dialog.open(ContacterComponent, dialogConfig);
}
ShowModalTheme() {


    // Create ComponentPortal that can be attached to a PortalHost
   
  const dialogConfig = new MatDialogConfig();
  
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;
  dialogConfig.width = '85vh';
  this.dialog.open(ThemeComponent, dialogConfig );
}
ShowModalCalenderier() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;
  dialogConfig.width = '85vh';
  this.dialog.open(CalenderierComponent, dialogConfig );
}
ShowModalEquipe() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;
  dialogConfig.width = '85vh';
  
  this.dialog.open(EquipeComponent, dialogConfig);
}
ShowModalPrix() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '85vh';
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;

  this.dialog.open(PrixComponent, dialogConfig );
}
}
