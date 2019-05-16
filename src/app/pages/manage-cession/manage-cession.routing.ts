import { CessionFormComponent } from "./cession-form/cession-form.component";
import { CessionListComponent } from "./cession-list/cession-list.component";
import { Routes, RouterModule } from "@angular/router";
import { ManageCessionComponent } from './manage-cession.component';

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: ManageCessionComponent,
      children: [
        {path: '', redirectTo: 'cession-add', pathMatch: 'full'},
        {path: 'cession-add', component: CessionFormComponent},
        {path: 'cession-edit/:cessionId', component: CessionFormComponent},
        {path: 'cession-list', component: CessionListComponent}
      ]
    }
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  