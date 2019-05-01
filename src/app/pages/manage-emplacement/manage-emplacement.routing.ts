import {RouterModule, Routes} from '@angular/router';
import {EmplacementListeComponent} from './emplacement-liste/emplacement-liste.component';
import {EmplacementFormComponent} from './emplacement-form/emplacement-form.component';

/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: EmplacementListeComponent,
    children: [
      {path: '', redirectTo: 'emp-list', pathMatch: 'full'},
      {path: 'emp-list', component: EmplacementListeComponent},
      {path: 'emp-add', component: EmplacementFormComponent}
    ]
  }

];

export const routing = RouterModule.forChild(childRoutes);
