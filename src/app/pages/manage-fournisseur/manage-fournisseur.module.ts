import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { FournisseurFormComponent } from './fournisseur-form/fournisseur-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { routing } from './manage-fournisseur.routing';
import { ManageFournisseurComponent } from './manage-fournisseur.component';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageFournisseurComponent, FournisseurListComponent, FournisseurFormComponent]
})
export class ManageFournisseurModule { }
