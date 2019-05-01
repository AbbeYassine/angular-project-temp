import {RouterModule, Routes} from '@angular/router';
import {ManageArticleComponent} from './manage-article.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {ArticleListComponent} from './article-list/article-list.component';
/* children components */
const childRoutes: Routes = [
  {
    path: '',
    component: ManageArticleComponent,
    children: [
      {path: '', redirectTo: 'article-add', pathMatch: 'full'},
      {path: 'article-add', component: ArticleFormComponent},
      {path: 'article-list', component: ArticleListComponent}
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
