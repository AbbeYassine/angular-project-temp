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

  article: Article;
  famille: FamilleImmobilisation;
  fournisseur: Fournisseur;
  bonLivraison: BonLivraisonFr;
  emplacement: Emplacement;
  dateDebutAmort: string;
  dateFinAmort: string;

  sorties?: Sortie[] = [];
  detailAmorts: DetailAmort[] = [];
}

export class ImmobilisationDTO {
  refArt: string;
  codeFam: number;
  priceArt: number;
  codeFr: string;
  referenceFact: string;
  codeEmp: string;
  dateDebutAmort: string;
  tauxFami: number;

  dateFinAmort: string;
  detailAmorts: DetailAmort[] = [];
}
