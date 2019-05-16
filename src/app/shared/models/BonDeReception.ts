import {LigneReception} from './LigneReception';
import {BonLivraisonFr} from './BonLivraisonFr';

export class BonDeReception {
  numeroBonRecep: string;
  dateRecep: Date;
  referenceFact: BonLivraisonFr;
  ligneReceptionCollection: LigneReception[] = [];
}

export class BonDeReceptionDTO {
  codeFr: string;
  date: string;
  ligneRecepetions: LigneReceptionDTO[] = [];
  montant_ht: number;
}

export class LigneReceptionDTO {
  refArt: string;
  quantite: number = 0;
  designation: string;
  prix_unitaire: number = 0;
  remise: number = 0;
  montant_ht: number = 0;
}
