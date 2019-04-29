import { Routes, RouterModule } from "@angular/router";
import { EmplacementListeComponent } from "./emplacement-liste/emplacement-liste.component";
import { EmplacementFormComponent } from "./emplacement-form/emplacement-form.component";

/* children components */
const childRoutes: Routes = [
    {
      path: '',
      component: EmplacementListeComponent,
      children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: EmplacementListeComponent},
          {path: 'add', component: EmplacementFormComponent}
          ]
    }
    
  ];
  
  export const routing = RouterModule.forChild(childRoutes);
  