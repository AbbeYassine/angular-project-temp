import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PagesModule} from './pages/pages.module';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticleService} from './shared/services/article.service';
import {FamilleServices} from './shared/services/famille.service';
import {EmplacementService} from './shared/services/emplacement.service';
import {SiteService} from './shared/services/site.service';
import { FournisseurService } from './shared/services/fournisseur.service';
import { ReceptionService } from './shared/services/reception.service';
import { LigneService } from './shared/services/ligne.service';
import { BonLivraisonService } from './shared/services/bonlivraison.service';
import { ImmobilisationService } from './shared/services/immobilisation.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ArticleService, EmplacementService, FamilleServices, EmplacementServices, SiteService, FournisseurService, ReceptionService, LigneService, BonLivraisonService, ImmobilisationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
