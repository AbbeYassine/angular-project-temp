import { Routes, RouterModule } from "@angular/router";
import { ManageFamilleComponent } from "./manage-famille.component";
import { FamilleFormComponent } from "./famille-form/famille-form.component";
import { FamilleListComponent } from "./famille-list/famille-list.component";

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ManageFamilleComponent,
      children: [
        {path: '', redirectTo: 'famille-add', pathMatch: 'full'},
        {path: 'famille-add', component: FamilleFormComponent},
        {path: 'famille-list', component: FamilleListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);