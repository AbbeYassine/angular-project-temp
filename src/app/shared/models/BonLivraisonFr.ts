import {Fournisseur} from './fournisseur';
import {BonDeReception} from './BonDeReception';

export class BonLivraisonFr {
  referenceFact: string;
  dateFact: Date;
  codeFr: Fournisseur;
  bonDeReceptionCollection: BonDeReception[] = [];
}
