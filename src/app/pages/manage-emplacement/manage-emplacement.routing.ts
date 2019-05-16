import {RouterModule, Routes} from '@angular/router';
import {EmplacementListeComponent} from './emplacement-liste/emplacement-liste.component';
import {EmplacementFormComponent} from './emplacement-form/emplacement-form.component';
import { ManageEmplacementComponent } from './manage-emplacement.component';

/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: ManageEmplacementComponent,
    children: [
      {path: '', redirectTo: 'emp-add', pathMatch: 'full'},
      {path: 'emp-add', component: EmplacementFormComponent},
      {path: 'emplacement-edit/:emplacementId', component: EmplacementFormComponent},
      {path: 'emp-list', component: EmplacementListeComponent},
    ]
  }

];

export const routing = RouterModule.forChild(childRoutes);
