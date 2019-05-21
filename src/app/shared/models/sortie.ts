import {Entree} from './entree';
import {Fournisseur} from './fournisseur';
import {Immobilisation} from './Immobilisation';
import {User} from './user';

export class Sortie {

  idSortie: string;
  dateSortie: string;
  motifSortie: string;
  observSortie: string;
  entree: Entree = new Entree();
  fournisseur: Fournisseur;
  immobilisation: Immobilisation;
  user: User;
}

export class SortieDTO {
  dateSortie: Date;
  motifSortie: string;
  observSortie: string;
  codeFr: string;
  codeImmo: string;
  idUser: string;
}
