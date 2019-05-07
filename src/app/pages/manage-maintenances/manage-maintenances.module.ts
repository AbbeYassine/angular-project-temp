import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenancesListComponent } from './maintenances-list/maintenances-list.component';
import { ManageMaintenancesComponent } from './manage-maintenances.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageMaintenancesComponent,MaintenancesListComponent]
})
export class ManageMaintenancesModule { }
