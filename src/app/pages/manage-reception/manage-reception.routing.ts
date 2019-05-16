import { Routes, RouterModule } from "@angular/router";
import { ReceptionFormComponent } from "./reception-form/reception-form.component";
import { ReceptionListComponent } from "./reception-list/reception-list.component";
import { ManageReceptionComponent } from "./manage-reception.component";

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ManageReceptionComponent,
      children: [
        {path: '', redirectTo: 'reception-add', pathMatch: 'full'},
        {path: 'reception-add', component: ReceptionFormComponent},
        {path: 'reception-edit/:receptionId', component: ReceptionFormComponent},
        {path: 'reception-list', component: ReceptionListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  