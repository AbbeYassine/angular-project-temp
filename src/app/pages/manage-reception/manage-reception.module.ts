import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionListComponent } from './src/app/pages/manage-reception/reception-list/reception-list.component';
import { ReceptionFormComponent } from './src/app/pages/manage-reception/reception-form/reception-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReceptionListComponent, ReceptionFormComponent]
})
export class ManageReceptionModule { }
