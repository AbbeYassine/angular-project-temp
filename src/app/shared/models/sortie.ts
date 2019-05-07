import { Entree } from "./entree";
import { Fournisseur } from "./fournisseur";
import { Immobilisation } from "./Immobilisation";
import { User } from "./user";

export class Sortie{
    dateSortie: Date;
    motifSortie: string;
    observSortie: string;
    entreeCollection: Entree[]=[];
    codeFr: Fournisseur;
    codeImmo: Immobilisation;
    idUser: User;

  }