import { FullCalendarModule } from 'ng-fullcalendar';
import { EventSesrvice } from './calendar2/event.service';


import { NgtUniversalModule } from '@ng-toolkit/universal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery'; 



import { HttpModule } from '@angular/http';
//import {CalendarComponent} from "ap-angular2-fullcalendar";


import { MatMenuModule } from '@angular/material';
//Flex Layout
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
     MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule
} from '@angular/material';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './loader/loader-interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AvertinscrisComponent } from './avertinscris/avertinscris.component';
import { NavbarConnInscriComponent } from './navbar-conn-inscri/navbar-conn-inscri.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { CircularChartComponent } from './circular-chart/circular-chart.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileComponent } from './profile/profile.component';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';
import {ProjetsModule} from './projets/projets.module';
import { UsersComponent } from './users/users.component';
import { NavbarHomeConnectComponent } from './navbar-home-connect/navbar-home-connect.component';

import { HomeContenuComponent } from './home-contenu/home-contenu.component';
import { ContacterComponent } from './contacter/contacter.component';
import { ThemeComponent } from './popup/theme/theme.component';
import { EquipeComponent } from './popup/equipe/equipe.component';
import { PrixComponent } from './popup/prix/prix.component';
import { ThermeComponent } from './therme/therme.component';
import { CalenderierComponent } from './popup/calenderier/calenderier.component';

// import {MatTabsModule} from '@angular/material/tabs';
// import {MatSidenavModule} from '@angular/material/sidenav';
import { LineChart2Component } from './line-chart2/line-chart2.component';
import { ChangeMpComponent } from './popup/change-mp/change-mp.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChart2Component } from './bar-chart2/bar-chart2.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {MessagesComponent} from './messages/messages.component';
import {WorkshopsModule} from './workshops/workshops.module';
import { MenuVerticaleComponent } from './menu-verticale/menu-verticale.component';
import { NewNavBarComponent } from './new-nav-bar/new-nav-bar.component';
import { NewFooterBarComponent } from './new-footer-bar/new-footer-bar.component';
import {CoursModule} from './cours/cours.module';
import { NgxGalleryModule } from 'ngx-gallery';
import {MatBadgeModule} from '@angular/material';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { Calendar2Component } from './calendar2/calendar2.component';
import { MenuVerticaleResponsiveComponent } from './menu-verticale-responsive/menu-verticale-responsive.component';

import {TeamComponent } from './team/team.component';
import { PopupvideoComponent } from './cours/popupvideo/popupvideo.component';
import {PresenceModule} from './presence/presence.module';
import { NotificationsComponent } from './notifications/notifications.component';

//import { PresenceComponent } from './presence/presence.component';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule,DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,

   // NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    //CalendarComponent,
    EventsComponent,
    NewsComponent,
    NavbarComponent,
    AvertinscrisComponent,
    NavbarConnInscriComponent,
    DashboardComponent,
    ColumnChartComponent,
    CircularChartComponent,TeamComponent,
    ProfileComponent, MessagesComponent,
    NavbarGeneralComponent, LoaderComponent, UsersComponent, 
    //DetailsComponent, SendingComponent ,
    NavbarHomeConnectComponent, CalenderierComponent,
    HomeContenuComponent, ContacterComponent, ThemeComponent, EquipeComponent, PrixComponent, ThermeComponent,LineChart2Component, ChangeMpComponent, BarChartComponent, BarChart2Component,PieChartComponent, MenuVerticaleComponent, NewNavBarComponent, NewFooterBarComponent, Calendar2Component, MenuVerticaleResponsiveComponent, NotificationsComponent, //PresenceComponent,
      ],
      entryComponents: [ContacterComponent, ThemeComponent, PrixComponent, EquipeComponent, CalenderierComponent,ChangeMpComponent
        , PopupvideoComponent
      ],
  imports:[
    BrowserModule,
    //FullCalendarModule,
    FullCalendarModule,

 CommonModule,
NgtUniversalModule,
AngularSvgIconModule,
BrowserModule,
FormsModule, NgxGalleryModule,
HttpModule,
MatBadgeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      QuestionnairesModule, ProjetsModule,CoursModule,PresenceModule,
      MatDatepickerModule, MatNativeDateModule,
      MatTooltipModule,WorkshopsModule
  ],
    providers: [JwtHelperService,EventSesrvice ,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptorService,
        multi: true
      }],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
