import { ImmobilisationListComponent } from "./immobilisation-list/immobilisation-list.component";
import { ImmobilisationFormComponent } from "./immobilisation-form/immobilisation-form.component";
import { Routes, RouterModule } from "@angular/router";
import { ManageImmobilisationComponent } from "./manage-immobilisation.component";

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ManageImmobilisationComponent,
      children: [
        {path: '', redirectTo: 'immobilisation-add', pathMatch: 'full'},
        {path: 'immobilisation-add', component: ImmobilisationFormComponent},
        {path: 'immobilisation-edit/:immobilisationId', component: ImmobilisationFormComponent},
        {path: 'immobilisation-list', component: ImmobilisationListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  