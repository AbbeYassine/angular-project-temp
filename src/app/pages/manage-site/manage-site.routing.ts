import {RouterModule, Routes} from '@angular/router';
import {SiteListeComponent} from './site-liste/site-liste.component';
import {SiteAjouterComponent} from './site-ajouter/site-ajouter.component';
import {ManageSiteComponent} from './manage-site.component';
/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: ManageSiteComponent,
    children: [
      {path: '', redirectTo: 'site-add', pathMatch: 'full'},
      {path: 'site-add', component: SiteAjouterComponent},
      {path: 'site-edit/:siteId', component: SiteAjouterComponent},
      {path: 'site-list', component: SiteListeComponent}
    ]
  }

];

export const routing = RouterModule.forChild(childRoutes);
