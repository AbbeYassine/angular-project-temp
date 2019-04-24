import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {ArticleService} from '../../../shared/services/article.service';
import {TablesDataService} from '../../table/components/data-table/tablesData.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private articleService
                : ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAllArticle()
      .subscribe(
        (data: Article[]) => {
          this.articles = data;
        }
      );
  }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
