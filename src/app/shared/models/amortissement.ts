import { Immobilisation } from "./Immobilisation";
import { DetailAmort } from "./detailamort";

export class Amortissement{
    codeAmort: number;
    dateDebutAmort: Date;
    dateFinAmort: Date;
    codeImmo: Immobilisation;
    detailAmortCollection: DetailAmort[]=[];
  }