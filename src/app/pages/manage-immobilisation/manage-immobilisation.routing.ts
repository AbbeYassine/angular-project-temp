import { ImmobilisationListComponent } from "./immobilisation-list/immobilisation-list.component";
import { ImmobilisationFormComponent } from "./immobilisation-form/immobilisation-form.component";
import { Routes, RouterModule } from "@angular/router";

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ImmobilisationListComponent,
      children: [
        {path: '', redirectTo: 'immobilisation-add', pathMatch: 'full'},
        {path: 'immobilisation-add', component: ImmobilisationFormComponent},
        {path: 'immobilisation-list', component: ImmobilisationListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  