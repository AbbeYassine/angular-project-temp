import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmobilisationListComponent } from './immobilisation-list/immobilisation-list.component';
import { ImmobilisationFormComponent } from './immobilisation-form/immobilisation-form.component';
import { ManageImmobilisationComponent } from './manage-immobilisation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageImmobilisationComponent,ImmobilisationListComponent, ImmobilisationFormComponent]
})
export class ManageImmobilisationModule { }
