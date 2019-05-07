import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CessionListComponent } from './src/app/pages/manage-cession/cession-list/cession-list.component';
import { CessionFormComponent } from './src/app/pages/manage-cession/cession-form/cession-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CessionListComponent, CessionFormComponent]
})
export class ManageCessionModule { }
