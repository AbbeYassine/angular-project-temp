import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CessionListComponent } from './cession-list/cession-list.component';
import { CessionFormComponent } from './cession-form/cession-form.component';
import { ManageCessionComponent } from './manage-cession.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { routing } from './manage-cession.routing';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageCessionComponent,CessionListComponent, CessionFormComponent]
})
export class ManageCessionModule { }
