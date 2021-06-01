import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import {AvertinscrisComponent} from './avertinscris/avertinscris.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { QuestionnaireComponent } from './questionnaires/questionnaire/questionnaire.component';
import {ProfileComponent } from './profile/profile.component';
import {ListProjetComponent} from './projets/list-projet/list-projet.component';
import {UsersComponent} from'./users/users.component';
//import {DetailsComponent} from'./users/details/details.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ThermeComponent } from './therme/therme.component';
import { ContacterComponent } from './contacter/contacter.component';
import {MessagesComponent} from './messages/messages.component';
//import {NotFoundComponent} from './not-found/not-found.component';
import {ListWorkshopsAdminComponent} from './workshops/list-workshops-admin/list-workshops-admin.component';
import {MenuVerticaleComponent} from './menu-verticale/menu-verticale.component';
import {ListCoursComponent} from './cours/list-cours/list-cours.component';
import { AddCoursComponent } from './cours/add-cours/add-cours.component';
import { DetailsComponent } from './cours/details/details.component';
import { MycoursComponent } from './cours/mycours/mycours.component';
import {Calendar2Component} from './calendar2/calendar2.component';
import {TeamComponent } from './team/team.component';
import { LabComponent } from './cours/lab/lab.component';
import {ListPresenceComponent} from './presence/list-presence/list-presence.component';
import {NotificationsComponent} from './notifications/notifications.component';

//import {PresenceComponent} from './presence/presence.component';

const routes: Routes = [
 

  
  {path: 'menu_verticale', component: MenuVerticaleComponent},
  { path: '', component: HomeComponent },
 
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContacterComponent },
  {path: 'Accueil', component: DashboardComponent, children: [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
      path: 'Projets', component: ListProjetComponent,
    },
    {path: 'notifications', component:NotificationsComponent},
    { path: 'cours', component: ListCoursComponent },
    { path: 'Calendrier', component: Calendar2Component },
    { path: 'Mescours', component: MycoursComponent },
    { path: 'addcours', component: AddCoursComponent },
    { path: 'Team', component: TeamComponent },
    { path: 'Lab', component: LabComponent },
    { path: 'List_presence', component: ListPresenceComponent },
    { path: 'detailcours/:id', component: DetailsComponent }
] , canActivate: [AuthGuard]},
  { path: 'avertinscris', component: AvertinscrisComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent},
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'Therme', component: ThermeComponent },
  { path: 'questionnaire', component: QuestionnaireComponent  },
  { path: 'questionnaire/:id', component: QuestionnaireComponent },

  { path: 'Users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'Messages', component: MessagesComponent },
  {path: 'Workshops_admin', component: ListWorkshopsAdminComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [ RouterModule ],
  providers: [AuthService, AuthGuard],
  declarations: []
})
export class AppRoutingModule { }