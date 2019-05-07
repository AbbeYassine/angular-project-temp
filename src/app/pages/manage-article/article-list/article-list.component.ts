import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {ArticleService} from '../../../shared/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  //familles: FamilleImmobilisation[] = [];
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private articleServices
                : ArticleService) {
  }

  ngOnInit() {
    this.articleServices.getAllArticle()
      .subscribe(
        (data: Article[]) => {
          this.articles = data;
          this.articles.sort((a: Article, b: Article) => {
            if (a.codeFami.codeFami < b.codeFami.codeFami) {
              return -1;
            }
            if (a.codeFami.codeFami > b.codeFami.codeFami) {
              return 1;
            }
            return 0;
          });
          console.log(this.articles);
        }
      );
  }


  getArticleNumberPerCodeFami(codeFamille) {
    let sum = 0;
    this.articles.forEach(
      article => {
        if (article.codeFami.codeFami === codeFamille) {
          sum++;
        }
      }
    );
    console.log(sum);
    return sum;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
