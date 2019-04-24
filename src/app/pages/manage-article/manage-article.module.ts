import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {SharedModule} from '../../shared/shared.module';
import {ModalModule} from 'ngx-modal';
import {routing} from './manage-article.routing';
import {ManageArticleComponent} from './manage-article.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [ManageArticleComponent, ArticleListComponent, ArticleFormComponent]
})
export class ManageArticleModule {
}
