import {Component, OnInit} from '@angular/core';
import {Sortie} from '../../../shared/models/sortie';

@Component({
  selector: 'app-maintenances-list',
  templateUrl: './maintenances-list.component.html',
  styleUrls: ['./maintenances-list.component.scss']
})
export class MaintenancesListComponent implements OnInit {

  sorties: Sortie[] = [];

  constructor() {
  }

  ngOnInit() {

    this.sorties.push({
        dateSortie: '12/12/2005',
        user: null,
        immobilisation: {
          codeImmo: '11111',
          sorties: [],
          emplacement: {
            codeEmp: '22222',
            codeSite: null,
            desigEmp: 'erferfre'
          },
          article: {
            codeFami: null,
            desigArt: 'ergfrefe',
            desigType: 'Rezf',
            codeEmp: null,
            quantiteGlobale: 12,
            referenceArt: '1122',
            dernierPrix: 5500
          },
          bonLivraison: null,
          dateDebutAmort: '22/11/1900',
          dateFinAmort: '25/11/2005',
          detailAmorts: [],
          famille: null,
          fournisseur: null,
          libSaisie: null
        },
        idSortie: '15',
        motifSortie: 'test',
        entree: {
          sortie: null,
          dateEntree: '12/12/2008',
          observEntree: ''
        },
        fournisseur: {
          raisonSocial: 'test',
          telephoneFr: '',
          siteFr: null,
          faxFr: '',
          emailFr: '',
          adresseFr: '',
          aContacter: '',
          codeFr: ''
        },
        observSortie: ''
      },
      {
        dateSortie: '12/12/2005',
        user: null,
        immobilisation: {
          codeImmo: '11111',
          sorties: [],
          emplacement: {
            codeEmp: '22222',
            codeSite: null,
            desigEmp: 'erferfre'
          },
          article: {
            codeFami: null,
            desigArt: 'ergfrefe',
            desigType: 'Rezf',
            codeEmp: null,
            quantiteGlobale: 12,
            referenceArt: '1122',
            dernierPrix: 5500
          },
          bonLivraison: null,
          dateDebutAmort: '22/11/1900',
          dateFinAmort: '25/11/2005',
          detailAmorts: [],
          famille: null,
          fournisseur: null,
          libSaisie: null
        },
        idSortie: '15',
        motifSortie: 'test',
        entree: null,
        fournisseur: {
          raisonSocial: 'test',
          telephoneFr: '',
          siteFr: null,
          faxFr: '',
          emailFr: '',
          adresseFr: '',
          aContacter: '',
          codeFr: ''
        },
        observSortie: ''
      });
  }

}
