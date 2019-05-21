import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenancesListComponent } from './maintenances-list/maintenances-list.component';
import { ManageMaintenancesComponent } from './manage-maintenances.component';
import { MaintenanceSortieComponent } from './maintenance-sortie/maintenance-sortie.component';
import { MaintenanceEntreeComponent } from './maintenance-entree/maintenance-entree.component';
import { routing } from './manage-maintenances.routing';
import { ModalModule } from 'ngx-modal';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageMaintenancesComponent,MaintenancesListComponent, MaintenanceSortieComponent, MaintenanceEntreeComponent]
})
export class ManageMaintenancesModule { }
