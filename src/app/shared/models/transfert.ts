import { Emplacement } from "./emplacement";
import { Immobilisation } from "./Immobilisation";

export class Transfert{
    dateTransfert: Date;
    objetTransfert: string;
    observTransfert: number;
    ancien: Emplacement;
    nouvelle: Emplacement;
    codeImmo: Immobilisation;
  }