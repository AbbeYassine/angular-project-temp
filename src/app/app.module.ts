import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PagesModule} from './pages/pages.module';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticleService} from './shared/services/article.service';
import {FamilleServices} from './shared/services/famille.service';
import {EmplacementServices} from './shared/services/emplacement';

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
  providers: [ArticleService, FamilleServices, EmplacementServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
