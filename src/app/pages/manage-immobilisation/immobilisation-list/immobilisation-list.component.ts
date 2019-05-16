import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../../shared/services/article.service';

@Component({
  selector: 'app-immobilisation-list',
  templateUrl: './immobilisation-list.component.html',
  styleUrls: ['./immobilisation-list.component.scss']
})
export class ImmobilisationListComponent implements OnInit {
  pageSize = 10;
  pageNumber = 1;
  immobilisation: Immobilisation[]=[];
  article: Article[]=[];
  busy : Subscription;
  constructor(private immobilisationService: ImmobilisationService,
    private articleService: ArticleService ) { }

  ngOnInit() {
    this.busy = this.immobilisationService.getAllImmo()
      .subscribe(
        (data: Immobilisation[]) => {
          this.immobilisation = data;
          console.log(this.immobilisation);
        }
      );
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}
