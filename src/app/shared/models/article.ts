import {FamilleImmobilisation} from './famille-immobilisation';
import {Emplacement} from './emplacement';

export class Article {
  referenceArt: number;
  desigArt: string;
  dernierPrix: number;
  quantiteGlobale: number;
  desigType: string = '0';
  codeEmp: Emplacement = new Emplacement();
  codeFami: FamilleImmobilisation = new FamilleImmobilisation();

}

