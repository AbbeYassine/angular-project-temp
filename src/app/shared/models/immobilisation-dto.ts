import {DetailAmort} from './detailamort';

export class ImmobilisationDTO {
  refArt: string;
  codeFam: number;
  priceArt: number;
  codeFr: string;
  referenceFact: string;
  codeEmp: string;
  dateDebutAmort: string;
  tauxFami: number;

  dateFinAmort: string;
  detailAmorts: DetailAmort[] = [];
}
