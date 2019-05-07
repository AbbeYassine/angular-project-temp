import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilleListComponent } from './famille-list/famille-list.component';
import { FamilleFormComponent } from './famille-form/famille-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { routing } from './manage-famille.routing';
import { ManageFamilleComponent } from './manage-famille.component';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
declarations: [ManageFamilleComponent, FamilleListComponent, FamilleFormComponent]
})
export class ManageFamilleModule {
  
 }
