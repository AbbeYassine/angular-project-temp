import { Component, OnInit } from '@angular/core';
import { Cession } from '../../../shared/models/cession';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { Subscription } from 'rxjs';
import { CessionService } from '../../../shared/services/cession.service';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { ArticleService } from '../../../shared/services/article.service';
import { DetailAmortService } from '../../../shared/services/detailamort.service';
import { Article } from '../../../shared/models/article';
import { DetailAmort } from '../../../shared/models/detailamort';

@Component({
  selector: 'app-cession-list',
  templateUrl: './cession-list.component.html',
  styleUrls: ['./cession-list.component.scss']
})
export class CessionListComponent implements OnInit {
  cessions: Cession[] = [];
  immobilisations: Immobilisation[]=[];
  article: Article[]=[];
  detailAmort: DetailAmort[]=[];
  
  pageSize = 10;
  pageNumber = 1;

  busy : Subscription;
  constructor(private cessionServices: CessionService,
    private immobilisationServices: ImmobilisationService,
    private articleService: ArticleService,
    private detailService: DetailAmortService
  ) { }

  ngOnInit() {
    this.busy = this.cessionServices.getAllCession()
    .subscribe(
      (data: Cession[]) => {
        this.cessions = data;
        console.log(this.cessions);
      }
    );
    }
    pageChanged(pN: number): void {
      this.pageNumber = pN;
    }
  
}
