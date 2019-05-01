import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmplacementListeComponent} from './emplacement-liste/emplacement-liste.component';
import {routing} from './manage-emplacement.routing';
import {EmplacementFormComponent} from './emplacement-form/emplacement-form.component';
import {ManageEmplacementComponent} from './manage-emplacement.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../../shared/shared.module';
import {ModalModule} from 'ngx-modal';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageEmplacementComponent, EmplacementListeComponent, EmplacementFormComponent]
})
export class ManageEmplacementModule {
}
