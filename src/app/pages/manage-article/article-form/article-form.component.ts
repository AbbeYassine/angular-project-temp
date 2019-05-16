import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {Emplacement} from '../../../shared/models/emplacement';
import {FamilleImmobilisation} from '../../../shared/models/famille-immobilisation';
import {FamilleServices} from '../../../shared/services/famille.service';
import {ArticleService} from '../../../shared/services/article.service';
import {EmplacementService} from '../../../shared/services/emplacement.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  article: Article = new Article();
  emplacements: Emplacement[] = [];
  famillesImmobilisation: FamilleImmobilisation[] = [];
  articleId:string;
  busy : Subscription;
  constructor(private familleServices: FamilleServices,
              private emplacementServices: EmplacementService,
              private articleServices: ArticleService,
              private router: Router,
              private route : ActivatedRoute) {

                this.articleId = this.route.snapshot.paramMap.get("articleId");
  }

  ngOnInit() {
    this.getAllFamilles();
    this.getAllEmplacements();

    if(this.articleId){
      this.articleServices.getArticleById(this.articleId)
        .subscribe(
          (data : Article)=>{
            this.article = data;
          }
        )
    }
  }

  valider() {
    console.log(this.article);
    if(!this.articleId){
    this.busy = this.articleServices.addArticle(this.article)
      .subscribe(
        (data) => {
          console.log(data);

          swal("Succés","Add article success","success");
          this.router.navigate(['/pages/manage-article/article-list']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.articleServices.editArticle(this.articleId,this.article)
        .subscribe(
          (data)=>{
            swal("Succés","Edit article success","success");
            this.router.navigate(['/pages/manage-article/article-list']);
          }
        )
    }

  }

  private getAllFamilles() {
    this.familleServices.getAllFamille()
      .subscribe(
        (data: FamilleImmobilisation[]) => {
          this.famillesImmobilisation = data;
        }
      );
  }

  private getAllEmplacements() {

    this.emplacementServices.getAllEmplacement()
      .subscribe(
        (data: Emplacement[]) => {
          this.emplacements = data;
        }
      );

  }
}

