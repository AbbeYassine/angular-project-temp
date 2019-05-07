import { BonLivraisonFr } from "./BonLivraisonFr";
import { LigneReception } from "./LigneReception";

export class BonDeReception{
    numeroBonRecep: string;
    dateRecep: Date;
    referenceFact: BonLivraisonFr;
    ligneReceptionCollection: LigneReception[] = [];
  }