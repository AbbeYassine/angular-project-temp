import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmobilisationListComponent } from './immobilisation-list/immobilisation-list.component';
import { ImmobilisationFormComponent } from './immobilisation-form/immobilisation-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImmobilisationListComponent, ImmobilisationFormComponent]
})
export class ManageImmobilisationModule { }
