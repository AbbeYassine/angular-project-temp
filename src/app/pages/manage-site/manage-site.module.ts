import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteListeComponent} from './site-liste/site-liste.component';
import {routing} from './manage-site.routing';
import {SiteAjouterComponent} from './site-ajouter/site-ajouter.component';
import {ManageSiteComponent} from './manage-site.component';
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
  declarations: [ManageSiteComponent, SiteListeComponent, SiteAjouterComponent]
})
export class ManageSiteModule {
}
