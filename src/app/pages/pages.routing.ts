import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {LoginComponent} from './login/login.component';

export const childRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', loadChildren: './index/index.module#IndexModule'},
      {path: 'editor', loadChildren: './editor/editor.module#EditorModule'},
      {path: 'icon', loadChildren: './icon/icon.module#IconModule'},
      {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
      {path: 'form', loadChildren: './form/form.module#FormModule'},
      {path: 'chManageEmplacementModulearts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'ui', loadChildren: './ui/ui.module#UIModule'},
      {path: 'table', loadChildren: './table/table.module#TableModule'},
      {path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule'},
      {path: 'manage-article', loadChildren: './manage-article/manage-article.module#ManageArticleModule'},
      {path: 'manage-site', loadChildren: './manage-site/manage-site.module#ManageSiteModule'},
      {path: 'manage-emplacement', loadChildren: './manage-emplacement/manage-emplacement.module#ManageEmplacementModule'},
      {path: 'manage-famille', loadChildren: './manage-famille/manage-famille.module#ManageFamilleModule'},
      {path: 'manage-fournisseur', loadChildren: './manage-fournisseur/manage-fournisseur.module#ManageFournisseurModule'},
      {path: 'manage-reception', loadChildren: './manage-reception/manage-reception.module#ManageReceptionModule'},
      {path: 'manage-immobilisation', loadChildren: './manage-immobilisation/manage-immobilisation.module#ManageImmobilisationModule'},
      {path: 'manage-maintenances', loadChildren: './manage-maintenances/manage-maintenances.module#ManageMaintenancesModule'},
      {path: 'manage-cession', loadChildren: './manage-cession/manage-cession.module#ManageCessionModule'},
      {path: 'managee-transfert', loadChildren: './managee-transfert/managee-transfert.module#ManageeTransfertModule'}
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
