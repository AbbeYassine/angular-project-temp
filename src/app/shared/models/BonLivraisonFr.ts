import {Fournisseur} from './fournisseur';
import {BonDeReception} from './BonDeReception';

export class BonLivraisonFr {
  referenceFact: string;
  dateFact: string;
  codeFr: Fournisseur;
  bonDeReceptionCollection: BonDeReception[] = [];
}
