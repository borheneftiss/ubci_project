import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component , Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router , NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public testUrl :string;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    public router: Router, public auth: AuthService , public route: ActivatedRoute, public location: Location
  ) { 
    router.events.subscribe((val) => {
      console.log("url:"+ location.path());
     this.testUrl = location.path();
     console.log(this.testUrl);
    });
  
  }

  title = 'ubci';

  ngOnInit() {

    if (this.localStorage.getItem('token')=="") {
      this.router.navigate(['/login']);
    }
  }


}


