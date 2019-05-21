import {Component, OnInit} from '@angular/core';
import {Immobilisation} from '../../../shared/models/immobilisation';
import {SortieDTO} from '../../../shared/models/sortie';
import {ImmobilisationService} from '../../../shared/services/immobilisation.service';
import {Fournisseur} from '../../../shared/models/fournisseur';
import {FournisseurService} from '../../../shared/services/fournisseur.service';
import {SortieService} from '../../../shared/services/sortie.service';

@Component({
  selector: 'app-maintenance-sortie',
  templateUrl: './maintenance-sortie.component.html',
  styleUrls: ['./maintenance-sortie.component.scss']
})
export class MaintenanceSortieComponent implements OnInit {

  immobilisations: Immobilisation[] = [];
  fournisseurs: Fournisseur[] = [];
  sortie: SortieDTO = new SortieDTO();

  constructor(private immobilisationService: ImmobilisationService,
              private fournisseurService: FournisseurService,
              private sortieService: SortieService) {
  }

  ngOnInit() {

    this.fournisseurs.push({
      codeFr: '1111',
      aContacter: '',
      adresseFr: '',
      emailFr: '',
      faxFr: '',
      raisonSocial: '',
      siteFr: null,
      telephoneFr: ''
    });

    this.immobilisations.push({
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
    });
    this.getAllImmobilisations();
    this.getAllFournisseurs();
  }

  getAllFournisseurs() {
    this.fournisseurService.getAllFournisseur()
      .subscribe(
        (data: Fournisseur[]) => {
          this.fournisseurs = data;
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
    console.log(this.sortie);
  }
}
