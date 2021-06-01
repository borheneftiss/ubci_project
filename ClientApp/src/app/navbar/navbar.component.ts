import { LOCAL_STORAGE , WINDOW} from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from '../register/register.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any, 
    private router: Router, private registerservice: RegisterService
  ) { }

  ngOnInit() {
  }
  ShowContact(){
    this.router.navigate(['/contact']);
  }
  DownloadFile() {
   
    
     this.window.open('https://innovact-ubci.chifco.com/Content/Règlement du Challenge Innovact UBCI_DEF.pdf', '_blank');
   }
  test(){
        
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
    this.router.navigate(['/login']);
  }

}
