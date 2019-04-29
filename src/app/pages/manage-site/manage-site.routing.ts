import {RouterModule, Routes} from '@angular/router';
import { SiteListeComponent } from './site-liste/site-liste.component';
import { SiteAjouterComponent } from './site-ajouter/site-ajouter.component';
import { ManageSiteComponent } from './manage-site.component';
/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: SiteListeComponent,
    children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', component: SiteListeComponent},
        {path: 'add', component: SiteAjouterComponent}
        ]
  }
  
];

export const routing = RouterModule.forChild(childRoutes);
