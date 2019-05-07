import { Immobilisation } from "./Immobilisation";
import { DetailAmort } from "./detailamort";

export class Amortissement{
    dateDebutAmort: Date;
    dateFinAmort: Date;
    codeImmo: Immobilisation;
    detailAmortCollection: DetailAmort[]=[];
  }