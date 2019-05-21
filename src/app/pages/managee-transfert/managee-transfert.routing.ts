import { Routes, RouterModule } from "@angular/router";
import { ManageeTransfertComponent } from "./managee-transfert.component";
import { TransfertAjoutComponent } from "./transfert-ajout/transfert-ajout.component";
import { TransfertListComponent } from "./transfert-list/transfert-list.component";
/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ManageeTransfertComponent,
      children: [
        {path: '', redirectTo: 'transfert-list', pathMatch: 'full'},
        {path: 'transfert-add', component: TransfertAjoutComponent},
        {path: 'transfert-list', component: TransfertListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  