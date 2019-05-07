import {Article} from './article';
import {BonDeReception} from './BonDeReception';

export class LigneReception {
  quantite: number;
  prixUnitaire: number;
  remise: number;
  montantHt: number;
  referenceArt: Article;
  numeroBonRecep: BonDeReception;
}
