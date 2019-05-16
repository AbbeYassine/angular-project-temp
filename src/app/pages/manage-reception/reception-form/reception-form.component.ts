import {Component, OnInit} from '@angular/core';
import {BonDeReception, BonDeReceptionDTO, LigneReceptionDTO} from '../../../shared/models/BonDeReception';
import {Subscription} from 'rxjs';
import {ReceptionService} from '../../../shared/services/reception.service';
import {BonLivraisonService} from '../../../shared/services/bonlivraison.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LigneService} from '../../../shared/services/ligne.service';
import {Fournisseur} from '../../../shared/models/fournisseur';
import {Article} from '../../../shared/models/article';
import {FamilleImmobilisation} from '../../../shared/models/famille-immobilisation';
import {ArticleService} from '../../../shared/services/article.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.component.html',
  styleUrls: ['./reception-form.component.scss']
})
export class ReceptionFormComponent implements OnInit {
  bondereception: BonDeReceptionDTO = new BonDeReceptionDTO();

  fournisseurs: Fournisseur[] = [];

  articles: Article[] = [];
  receptionId: string;
  busy: Subscription;


  constructor(private bonlivraisonService: BonLivraisonService,
              private receptionServices: ReceptionService,
              private articleServices: ArticleService,
              private ligneServices: LigneService,
              private router: Router,
              private route: ActivatedRoute) {

    this.receptionId = this.route.snapshot.paramMap.get('receptionId');
  }

  ngOnInit() {

    this.bondereception.ligneRecepetions.push(new LigneReceptionDTO());

    this.getAllArticles();

    this.articles.push({
      dernierPrix: 12,
      desigArt: 'Hello',
      referenceArt: '1111',
      desigType: 'frf',
      codeFami: new FamilleImmobilisation(),
      codeEmp: '1111',
      quantiteGlobale: 150
    });

    if (this.receptionId) {
      this.receptionServices.getReceptionById(this.receptionId)
        .subscribe(
          (data: BonDeReception) => {
            // this.bondereception = data;
          }
        );
    }
  }

  getAllArticles() {
    this.busy = this.articleServices.getAllArticle()
      .subscribe(
        (data: Article[]) => {
          this.articles = data;
        }
      );
  }

  transformBonRecpetion() {
    if (!this.isValidLigne(this.bondereception.ligneRecepetions[this.bondereception.ligneRecepetions.length - 1])) {
      this.bondereception.ligneRecepetions.pop();
    }
    let sum = 0;
    this.bondereception.ligneRecepetions.forEach(
      item => {
        item.montant_ht = (item.quantite * item.prix_unitaire) - ((item.quantite * item.prix_unitaire) * item.remise / 100);
        sum += item.montant_ht;
      }
    );
    this.bondereception.montant_ht = sum;
  }

  valider() {
    console.log(this.bondereception);

    this.transformBonRecpetion();


    if (!this.receptionId) {
      this.busy = this.receptionServices.addReception(this.bondereception)
        .subscribe(
          (data) => {
            console.log(data);
            swal('Succés', 'Add Reception success', 'success');
            this.router.navigate(['/pages/manage-reception/reception-list']);
          },
          (error) => {

          }
        );
    } else {
      this.busy = this.receptionServices.editReception(this.receptionId, this.bondereception)
        .subscribe(
          (data) => {
            swal('Succés', 'Edit reception success', 'success');
            this.router.navigate(['/pages/manage-reception/reception-list']);
          }
        );
    }
  }


  changeArticle(refArticle, index) {
    const articleIndex = this.articles.map(article => {
      return article.referenceArt;
    }).indexOf(refArticle);
    this.bondereception.ligneRecepetions[index].designation = this.articles[articleIndex].desigArt;
    this.bondereception.ligneRecepetions[index].prix_unitaire = this.articles[articleIndex].dernierPrix;
  }

  isValidLigne(ligneReception: LigneReceptionDTO) {
    if (!ligneReception.refArt || ligneReception.remise === undefined || !ligneReception.quantite) {
      return false;
    }
    return true;
  }

  addLigne() {
    if (this.isValidLigne(this.bondereception.ligneRecepetions[this.bondereception.ligneRecepetions.length - 1])) {
      this.bondereception.ligneRecepetions.push(new LigneReceptionDTO());
    }
  }

  deleteLigne(index) {
    if (this.bondereception.ligneRecepetions.length > 1)
      this.bondereception.ligneRecepetions.splice(index, 1);
  }
}
