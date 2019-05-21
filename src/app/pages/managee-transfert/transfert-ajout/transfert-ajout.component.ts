import {Component, OnInit} from '@angular/core';
import {TransfertDTO} from '../../../shared/models/transfert';
import {Immobilisation} from '../../../shared/models/immobilisation';
import {ImmobilisationService} from '../../../shared/services/immobilisation.service';
import {Emplacement} from '../../../shared/models/emplacement';
import {EmplacementService} from '../../../shared/services/emplacement.service';
import {TransfertService} from '../../../shared/services/transfert.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-transfert-ajout',
  templateUrl: './transfert-ajout.component.html',
  styleUrls: ['./transfert-ajout.component.scss']
})
export class TransfertAjoutComponent implements OnInit {
  immobilisations: Immobilisation[] = [];
  emplacements: Emplacement[] = [];
  emplacement: Emplacement;
  transfert: TransfertDTO = new TransfertDTO();

  busy: Subscription;

  constructor(private immobilisationService: ImmobilisationService,
              private emplacementService: EmplacementService,
              private transfertService: TransfertService) {
  }

  ngOnInit() {
    this.emplacements.push({
        codeEmp: '22222',
        codeSite: null,
        desigEmp: 'erferfre'
      },
      {
        codeEmp: '33333',
        codeSite: null,
        desigEmp: 'erferfre'
      },
      {
        codeEmp: '44444',
        codeSite: null,
        desigEmp: 'erferfre'
      });

    this.immobilisations.push({
      codeImmo: '11111',
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
    this.getAllEmplacements();
  }

  getAllEmplacements() {
    this.busy = this.emplacementService.getAllEmplacement()
      .subscribe(
        (data: Emplacement[]) => {
          this.emplacements = data;
        }
      );
  }

  getAllImmobilisations() {
    this.busy = this.immobilisationService.getAllImmo()
      .subscribe(
        (data: Immobilisation[]) => {
          this.immobilisations = data;
        }
      );
  }

  onChangeImmob(codeImmob) {
    const indexImmob = this.immobilisations.map(
      immob => {
        return immob.codeImmo;
      }
    ).indexOf(codeImmob);

    this.transfert.ancienEmpCode = this.immobilisations[indexImmob].emplacement.codeEmp;
  }

  valider() {
    console.log(this.transfert);
  }
}
