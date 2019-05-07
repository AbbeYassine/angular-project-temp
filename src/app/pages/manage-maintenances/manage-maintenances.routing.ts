import { MaintenancesListComponent } from "./maintenances-list/maintenances-list.component";
import { Routes, RouterModule } from "@angular/router";
import { ManageMaintenancesComponent } from './manage-maintenances.component';

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: MaintenancesListComponent,
      children: [
        {path: '', redirectTo: 'maintenances-list', pathMatch: 'full'},
        {path: 'maintenances-list', component: MaintenancesListComponent}
    
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);