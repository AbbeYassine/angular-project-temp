import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceptionListComponent} from './reception-list/reception-list.component';
import {ReceptionFormComponent} from './reception-form/reception-form.component';
import {ManageReceptionComponent} from './manage-reception.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ModalModule} from 'ngx-modal';
import {routing} from './manage-reception.routing';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageReceptionComponent,ReceptionListComponent, ReceptionFormComponent]
})
export class ManageReceptionModule { }
