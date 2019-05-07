import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {Emplacement} from '../../../shared/models/emplacement';
import {FamilleImmobilisation} from '../../../shared/models/famille-immobilisation';
import {FamilleServices} from '../../../shared/services/famille.service';
import {ArticleService} from '../../../shared/services/article.service';
import {EmplacementService} from '../../../shared/services/emplacement.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  article: Article = new Article();
  emplacements: Emplacement[] = [];
  famillesImmobilisation: FamilleImmobilisation[] = [];


  constructor(private familleServices: FamilleServices,
              private emplacementServices: EmplacementService,
              private articleServices: ArticleService) {
  }

  ngOnInit() {
    this.getAllFamilles();
    this.getAllEmplacements();
  }

  valider() {
    console.log(this.article);

    this.articleServices.addArticle(this.article)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {

        }
      );

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

