import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmobilisationListComponent } from './src/app/pages/manage-immobilisation/immobilisation-list/immobilisation-list.component';
import { ImmobilisationFormComponent } from './src/app/pages/manage-immobilisation/immobilisation-form/immobilisation-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImmobilisationListComponent, ImmobilisationFormComponent]
})
export class ManageImmobilisationModule { }
