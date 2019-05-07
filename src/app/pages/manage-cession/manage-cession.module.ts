import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CessionListComponent } from './cession-list/cession-list.component';
import { CessionFormComponent } from './cession-form/cession-form.component';
import { ManageCessionComponent } from './manage-cession.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageCessionComponent,CessionListComponent, CessionFormComponent]
})
export class ManageCessionModule { }
