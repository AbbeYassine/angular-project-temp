import {Component, OnInit} from '@angular/core';
import {Cession} from '../../../shared/models/cession';
import {DetailAmort} from '../../../shared/models/detailamort';
import {CessionService} from '../../../shared/services/cession.service';
import {ImmobilisationService} from '../../../shared/services/immobilisation.service';
import {DetailAmortService} from '../../../shared/services/detailamort.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {Immobilisation} from '../../../shared/models/Immobilisation';
import {Utils} from '../../../shared/utils';

@Component({
  selector: 'app-cession-form',
  templateUrl: './cession-form.component.html',
  styleUrls: ['./cession-form.component.scss']
})
export class CessionFormComponent implements OnInit {
  cession: Cession = new Cession();
  immobilisations: Immobilisation[] = [];

  selectedImmob: Immobilisation;

  detailAmortsTmp: DetailAmort[] = [];
  cessionId: number;
  busy: Subscription;

  calculatedValueNette: number = 0;

  constructor(private detailamortServices: DetailAmortService,
              private immobilisationServices: ImmobilisationService,
              private cessionServices: CessionService,
              private router: Router,
              private route: ActivatedRoute) {

    this.selectedImmob = new Immobilisation();
  }

  ngOnInit() {


    this.immobilisations.push({
      codeImmo: '1111',
      fournisseur: null,
      libSaisie: '',
      bonLivraison: {
        dateFact: '2015-02-11',
        codeFr: null,
        bonDeReceptionCollection: [],
        referenceFact: '11111'
      },
      emplacement: null,
      'detailAmorts': [{
        'date': '2018-12-31',
        'valeurBrute': 3000,
        'dotationAuxAmort': 268.466301369863,
        'amortCumule': 268.466301369863,
        'valeurNette': 2731.533698630137
      }, {
        'date': '2019-12-31',
        'valeurBrute': 2731.533698630137,
        'dotationAuxAmort': 997.1605479452055,
        'amortCumule': 1265.6268493150685,
        'valeurNette': 1734.3731506849317
      }, {
        'date': '2020-12-31',
        'valeurBrute': 1734.3731506849317,
        'dotationAuxAmort': 999.9,
        'amortCumule': 2265.5268493150684,
        'valeurNette': 734.4731506849317
      }, {
        'valeurBrute': 734.4731506849317,
        'dotationAuxAmort': 725.9547945205479,
        'amortCumule': 3000,
        'valeurNette': 0,
        'date': '2021-09-23'
      }],
      'famille': {
        tauxFami: 15,
        codeFami: 1111,
        desigFami: 'efzef',
        articleCollection: []
      },
      article: {
        desigArt: 'zefzef',
        dernierPrix: 3000,
        codeFami: null,
        desigType: 'zef',
        codeEmp: '',
        quantiteGlobale: 5000,
        referenceArt: '111111'
      },
      'dateDebutAmort': '2015-02-11',
      'dateFinAmort': '2021-09-23'
    });

    this.getAllImmobilisations();
    this.getAllDetailAmorts();

    if (this.cessionId) {
      this.cessionServices.getCessionById(this.cessionId)
        .subscribe(
          (data: Cession) => {
            this.cession = data;
          }
        );
    }
  }

  onChangeImmob(codeImmob) {
    const index = this.immobilisations.map(
      item => {
        return item.codeImmo;
      }
    ).indexOf(codeImmob);

    this.selectedImmob = this.immobilisations[index];
    console.log(this.selectedImmob);
  }

  valider() {
    console.log(this.cession);
    if (!this.cessionId) {
      this.busy = this.cessionServices.addCession(this.cession)
        .subscribe(
          (data) => {
            console.log(data);

            swal('Succés', 'Add cession success', 'success');
            this.router.navigate(['/pages/manage-cession/cession-list']);
          },
          (error) => {

          }
        );
    } else {
      this.busy = this.cessionServices.editCession(this.cessionId, this.cession)
        .subscribe(
          (data) => {
            swal('Succés', 'Edit cession success', 'success');
            this.router.navigate(['/pages/manage-cession/cession-list']);
          }
        );
    }

  }

  onChangeDateCession(dateCession) {
    const valuePerDay = (this.selectedImmob.article.dernierPrix * this.selectedImmob.famille.tauxFami) / (365 * 100);

    let nbDays = this.selectedImmob.article.dernierPrix / valuePerDay;
    var realDateCession = Utils.convertToDate(dateCession);
    var realDateDebutAmort = Utils.convertToDate(this.selectedImmob.dateDebutAmort);
    var realDateFinAmort = Utils.convertToDate(this.selectedImmob.dateFinAmort);

    let nbDaysCalTmp = Utils.nbDays(realDateDebutAmort, realDateCession);
    console.log(nbDaysCalTmp);

    console.log(realDateDebutAmort);
    console.log(realDateCession);
    if (realDateFinAmort > realDateCession) {
      this.calculatedValueNette = this.selectedImmob.article.dernierPrix - (nbDaysCalTmp * valuePerDay);
    } else {
      this.calculatedValueNette = this.selectedImmob.article.dernierPrix - (nbDays * valuePerDay);
    }


    this.detailAmortsTmp = [];

    var result = Utils.convertToDate(this.selectedImmob.dateDebutAmort);
    result.setDate(Utils.convertToDate(this.selectedImmob.dateDebutAmort).getDate() + nbDays);
    //this.immobilisation.dateFinAmort = Utils.formatDate(result);


    let startDateReal = Utils.convertToDate(this.selectedImmob.dateDebutAmort);
    const endDateReal = result;

    var tmp = Utils.convertToDate(this.cession.dateCession);

    while (nbDaysCalTmp > 365 && tmp.getFullYear() !== startDateReal.getFullYear()) {
      let nbDaysCal = Utils.nbDays(startDateReal, new Date(startDateReal.getFullYear(), 11, 31));
      console.log(nbDaysCal);
      let detailAmort = new DetailAmort();
      detailAmort.date = Utils.formatDate(new Date(startDateReal.getFullYear(), 11, 31));
      detailAmort.valeurBrute = this.detailAmortsTmp.length > 0 ? this.detailAmortsTmp[this.detailAmortsTmp.length - 1].valeurNette : this.selectedImmob.article.dernierPrix;
      detailAmort.dotationAuxAmort = nbDaysCal * valuePerDay;
      detailAmort.amortCumule = this.detailAmortsTmp.length > 0 ? detailAmort.dotationAuxAmort + this.detailAmortsTmp[this.detailAmortsTmp.length - 1].amortCumule : detailAmort.dotationAuxAmort;
      detailAmort.valeurNette = detailAmort.valeurBrute - detailAmort.dotationAuxAmort;

      startDateReal = new Date(startDateReal.getFullYear() + 1, 0, 1);
      nbDaysCalTmp -= nbDaysCal;
      tmp.setDate(startDateReal.getDate() + nbDaysCalTmp);
      console.log(startDateReal);
      this.detailAmortsTmp.push(detailAmort);
    }
    let nbDaysCal = Utils.nbDays(startDateReal, endDateReal);
    let detailAmort = new DetailAmort();
    detailAmort.valeurBrute = this.detailAmortsTmp.length > 0 ? this.detailAmortsTmp[this.detailAmortsTmp.length - 1].valeurNette : this.selectedImmob.article.dernierPrix;
    detailAmort.dotationAuxAmort = nbDaysCal * valuePerDay;
    detailAmort.amortCumule = this.selectedImmob.article.dernierPrix - this.calculatedValueNette;
    detailAmort.valeurNette = this.calculatedValueNette;
    detailAmort.date = this.cession.dateCession;
    this.detailAmortsTmp.push(detailAmort);
    console.log(this.detailAmortsTmp);
  }

  private getAllDetailAmorts() {
    this.detailamortServices.getAllDetailAmort()
      .subscribe(
        (data: DetailAmort[]) => {
          //this.detailamorts = data;
        }
      );
  }

  private getAllImmobilisations() {

    this.immobilisationServices.getAllImmo()
      .subscribe(
        (data: Immobilisation[]) => {
          this.immobilisations = data;
        }
      );

  }
}
