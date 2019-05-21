import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageeTransfertComponent } from './managee-transfert.component';
import { routing } from './managee-transfert.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { TransfertListComponent } from './transfert-list/transfert-list.component';
import { TransfertAjoutComponent } from './transfert-ajout/transfert-ajout.component';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageeTransfertComponent, TransfertListComponent, TransfertAjoutComponent]
})
export class ManageeTransfertModule { }