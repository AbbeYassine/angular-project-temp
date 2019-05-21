import {Component, OnInit} from '@angular/core';
import {EtatImmo} from '../../../shared/models/etatimmo';
import {Immobilisation} from '../../../shared/models/immobilisation';
import {Entree} from '../../../shared/models/entree';
import {ImmobilisationService} from '../../../shared/services/immobilisation.service';
import {EtatImmoService} from '../../../shared/services/etatimmo.service';
import {EntreeService} from '../../../shared/services/entree.service';
import {ActivatedRoute} from '@angular/router';
import {SortieService} from '../../../shared/services/sortie.service';
import {Sortie} from '../../../shared/models/sortie';

@Component({
  selector: 'app-maintenance-entree',
  templateUrl: './maintenance-entree.component.html',
  styleUrls: ['./maintenance-entree.component.scss']
})
export class MaintenanceEntreeComponent implements OnInit {

  immobilisations: Immobilisation[] = [];
  etatimmos: EtatImmo[] = [];
  entree: Entree = new Entree();


  sortieId: string;


  constructor(private immobilisationService: ImmobilisationService,
              private etatimmoService: EtatImmoService,
              private entreeService: EntreeService,
              private sortieService: SortieService,
              private route: ActivatedRoute) {
    this.sortieId = this.route.snapshot.paramMap.get('idSortie');
  }

  ngOnInit() {

    this.entree = {
      observEntree: '',
      dateEntree: '',
      sortie: {
        dateSortie: '12/12/2005',
        user: {
          login: 'Admin',
          motDePasse: ''
        },
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
      }
    };


    this.sortieService.getSortieById(this.sortieId)
      .subscribe(
        (data: Sortie) => {
          this.entree.sortie = data;
        },
        (error) => {

        }
      );

    this.getAllImmobilisations();
    // this.getAllEtatImmos();
  }

  getAllEtatImmos() {
    this.etatimmoService.getAllEtatImmo()
      .subscribe(
        (data: EtatImmo[]) => {
          this.etatimmos = data;
        }
      );
  }

  getAllImmobilisations() {
    this.immobilisationService.getAllImmo()
      .subscribe(
        (data: Immobilisation[]) => {
          this.immobilisations = data;
        }
      );
  }

  valider() {
    console.log(this.entree);
  }
}
