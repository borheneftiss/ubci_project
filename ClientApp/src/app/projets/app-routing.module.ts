import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AddProjetComponent} from './add-projet/add-projet.component';
import {EditProjetComponent} from './edit-projet/edit-projet.component';
const routes: Routes = [
  { path: 'Projets/add', component: AddProjetComponent },
  { path: 'Projets/edit/:id', component: EditProjetComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
