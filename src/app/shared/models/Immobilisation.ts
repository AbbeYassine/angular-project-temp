import {Article} from './article';
import {DetailAmort} from './detailamort';
import {FamilleImmobilisation} from './famille-immobilisation';
import {Fournisseur} from './fournisseur';
import {BonLivraisonFr} from './BonLivraisonFr';
import {Emplacement} from './emplacement';
import {Sortie} from './sortie';

export class Immobilisation {
  codeImmo: string;
  libSaisie: string;

  article: Article = new Article();
  famille: FamilleImmobilisation = new FamilleImmobilisation();
  fournisseur: Fournisseur;
  bonLivraison: BonLivraisonFr = new BonLivraisonFr();
  emplacement: Emplacement;
  dateDebutAmort: string;
  dateFinAmort: string;

  sorties?: Sortie[] = [];
  detailAmorts: DetailAmort[] = [];
}
