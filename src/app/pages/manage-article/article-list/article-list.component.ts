import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {ArticleService} from '../../../shared/services/article.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

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

  busy : Subscription;

  constructor(private articleServices
                : ArticleService) {
  }

  ngOnInit() {
    this.busy = this.articleServices.getAllArticle()
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


  deleteById(index:number){

    Swal({
      title: 'Are you sure?',
      text:  "Suppression d'un article",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.articleServices.deleteArticle(this.articles[index].referenceArt)
          .subscribe(
            (data)=>{
              Swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )
              this.articles.splice(index,1);
            }
          )
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
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
