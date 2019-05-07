import {FournisseurListComponent} from './fournisseur-list/fournisseur-list.component';
import {FournisseurFormComponent} from './fournisseur-form/fournisseur-form.component';
import {RouterModule, Routes} from '@angular/router';
import {ManageFournisseurComponent} from './manage-fournisseur.component';

/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: ManageFournisseurComponent,
    children: [
      {path: '', redirectTo: 'fournisseur-list', pathMatch: 'full'},
      {path: 'fournisseur-list', component: FournisseurListComponent},
      {path: 'fournisseur-add', component: FournisseurFormComponent}
    ]
  }

];

export const routing = RouterModule.forChild(childRoutes);
