import {LigneReception} from './LigneReception';
import {BonLivraisonFr} from './BonLivraisonFr';

export class BonDeReception {
  numeroBonRecep: string;
  dateRecep: Date;
  referenceFact: BonLivraisonFr;
  ligneReceptionCollection: LigneReception[] = [];
}
