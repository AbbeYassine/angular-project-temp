import {FamilleImmobilisation} from './famille-immobilisation';
import {Emplacement} from './emplacement';

export class Article{
  referenceArt: string;
  desigArt: string;
  dernierPrix: number;
  quantiteGlobale: number;
  desigType: string = '0';
  codeEmp: string;
  codeFami: FamilleImmobilisation;
}



