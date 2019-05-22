import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/models/article';
import {ArticleService} from '../../../shared/services/article.service';
import {Fournisseur} from '../../../shared/models/fournisseur';
import {FournisseurService} from '../../../shared/services/fournisseur.service';
import {BonLivraisonService} from '../../../shared/services/bonlivraison.service';
import {BonLivraisonFr} from '../../../shared/models/BonLivraisonFr';
import {Emplacement} from '../../../shared/models/emplacement';
import {EmplacementService} from '../../../shared/services/emplacement.service';
import {Utils} from '../../../shared/utils';
import {DetailAmort} from '../../../shared/models/detailamort';
import {ImmobilisationDTO} from '../../../shared/models/immobilisation-dto';

@Component({
  selector: 'app-immobilisation-form',
  templateUrl: './immobilisation-form.component.html',
  styleUrls: ['./immobilisation-form.component.scss']
})
export class ImmobilisationFormComponent implements OnInit {

  immobilisation: ImmobilisationDTO = new ImmobilisationDTO();
  fournisseurs: Fournisseur[] = [];

  articles: Article[] = [];

  bonLivraisons: BonLivraisonFr[] = [];
  fixBonLivraisons: BonLivraisonFr[] = [];
  emplacements: Emplacement[] = [];

  constructor(private articleServices: ArticleService,
              private fournisseurServices: FournisseurService,
              private livraisonServices: BonLivraisonService,
              private emplacementServices: EmplacementService) {
  }

  ngOnInit() {

    this.articles.push({
      dernierPrix: 3000,
      referenceArt: '1111',
      quantiteGlobale: 5200,
      codeEmp: '1111',
      codeFami: {
        tauxFami: 33.33,
        articleCollection: [],
        codeFami: 1111,
        desigFami: 'Hello'
      },
      desigType: '111',
      desigArt: 'hello'
    });

    this.getAllArticles();
    this.getAllFournisseurs();
    this.getAllBonDeReceptions();
    this.getAllEmplacements();
  }

  getAllEmplacements() {
    this.emplacementServices.getAllEmplacement()
      .subscribe(
        (data: Emplacement[]) => {
          this.emplacements = data;
        }
      );
  }

  getAllFournisseurs() {
    this.fournisseurServices.getAllFournisseur()
      .subscribe(
        (data: Fournisseur[]) => {
          this.fournisseurs = data;
        }
      );
  }

  getAllArticles() {
    this.articleServices.getAllArticle()
      .subscribe(
        (data: Article[]) => {
          this.articles = data;
        }
      );
  }

  onChangeFr(codeFr: string) {
    let bonReceptionTmp: BonLivraisonFr[] = [];

    bonReceptionTmp = this.fixBonLivraisons.filter(item => {
      if (item.codeFr.codeFr === codeFr) {
        return item;
      }
    });
    this.bonLivraisons = bonReceptionTmp;
  }

  private getAllBonDeReceptions() {
    this.livraisonServices.getAllLivraison()
      .subscribe(
        (data: BonLivraisonFr[]) => {
          this.bonLivraisons = data;
          this.fixBonLivraisons = data;
        }
      );
  }


  onChangeArt(refArt) {
    const indexArt = this.articles.map(
      item => {
        return item.referenceArt;
      }
    ).indexOf(refArt);
    this.immobilisation.codeFam = this.articles[indexArt].codeFami.codeFami;
    this.immobilisation.priceArt = this.articles[indexArt].dernierPrix;
    this.immobilisation.tauxFami = this.articles[indexArt].codeFami.tauxFami;
  }

  onChangeStartDate(startDate) {
    this.immobilisation.detailAmorts = [];
    const valuePerDay = (this.immobilisation.priceArt * this.immobilisation.tauxFami) / (365 * 100);

    let nbDays = this.immobilisation.priceArt / valuePerDay;
    var result = Utils.convertToDate(startDate);
    result.setDate(Utils.convertToDate(startDate).getDate() + nbDays);
    this.immobilisation.dateFinAmort = Utils.formatDate(result);


    let startDateReal = Utils.convertToDate(startDate);
    const endDateReal = result;

    var tmp = Utils.convertToDate(startDate);
    tmp.setDate(startDateReal.getDate() + nbDays);

    while (nbDays > 365 && tmp.getFullYear() !== startDateReal.getFullYear()) {
      let nbDaysCal = Utils.nbDays(startDateReal, new Date(startDateReal.getFullYear(), 11, 31));
      console.log(nbDaysCal);
      let detailAmort = new DetailAmort();
      detailAmort.date = Utils.formatDate(new Date(startDateReal.getFullYear(), 11, 31));
      detailAmort.valeurBrute = this.immobilisation.detailAmorts.length > 0 ? this.immobilisation.detailAmorts[this.immobilisation.detailAmorts.length - 1].valeurNette : this.immobilisation.priceArt;
      detailAmort.dotationAuxAmort = nbDaysCal * valuePerDay;
      detailAmort.amortCumule = this.immobilisation.detailAmorts.length > 0 ? detailAmort.dotationAuxAmort + this.immobilisation.detailAmorts[this.immobilisation.detailAmorts.length - 1].amortCumule : detailAmort.dotationAuxAmort;
      detailAmort.valeurNette = detailAmort.valeurBrute - detailAmort.dotationAuxAmort;

      startDateReal = new Date(startDateReal.getFullYear() + 1, 0, 1);
      nbDays -= nbDaysCal;
      tmp.setDate(startDateReal.getDate() + nbDays);
      console.log(startDateReal);
      this.immobilisation.detailAmorts.push(detailAmort);
    }
    let nbDaysCal = Utils.nbDays(startDateReal, endDateReal);
    let detailAmort = new DetailAmort();
    detailAmort.valeurBrute = this.immobilisation.detailAmorts.length > 0 ? this.immobilisation.detailAmorts[this.immobilisation.detailAmorts.length - 1].valeurNette : this.immobilisation.priceArt;
    detailAmort.dotationAuxAmort = nbDaysCal * valuePerDay;
    detailAmort.amortCumule = this.immobilisation.priceArt;
    detailAmort.valeurNette = 0;
    detailAmort.date = this.immobilisation.dateFinAmort;
    this.immobilisation.detailAmorts.push(detailAmort);
    console.log(this.immobilisation);
  }

  valider() {
    console.log(this.immobilisation);
    console.log(JSON.stringify(this.immobilisation));


  }
}
