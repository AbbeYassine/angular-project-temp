import {MaintenancesListComponent} from './maintenances-list/maintenances-list.component';
import {Routes, RouterModule} from '@angular/router';
import {ManageMaintenancesComponent} from './manage-maintenances.component';
import {MaintenanceEntreeComponent} from './maintenance-entree/maintenance-entree.component';
import {MaintenanceSortieComponent} from './maintenance-sortie/maintenance-sortie.component';

/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: ManageMaintenancesComponent,
    children: [
      {path: '', redirectTo: 'maintenances-sortie', pathMatch: 'full'},
      {path: 'maintenances-list', component: MaintenancesListComponent},
      {path: 'maintenances-sortie', component: MaintenanceSortieComponent},
      {path: 'maintenances-entree/:idSortie', component: MaintenanceEntreeComponent}
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
