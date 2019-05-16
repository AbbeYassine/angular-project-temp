import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImmobilisationListComponent} from './immobilisation-list/immobilisation-list.component';
import {ImmobilisationFormComponent} from './immobilisation-form/immobilisation-form.component';
import {ManageImmobilisationComponent} from './manage-immobilisation.component';
import {SharedModule} from '../../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-modal';
import {routing} from './manage-immobilisation.routing';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageImmobilisationComponent, ImmobilisationListComponent, ImmobilisationFormComponent]
})
export class ManageImmobilisationModule {
}
