import { Component, OnInit } from '@angular/core';
import { EtatImmo } from '../../../shared/models/etatimmo';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { Entree } from '../../../shared/models/entree';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { EtatImmoService } from '../../../shared/services/etatimmo.service';
import { EntreeService } from '../../../shared/services/entree.service';

@Component({
  selector: 'app-maintenance-entree',
  templateUrl: './maintenance-entree.component.html',
  styleUrls: ['./maintenance-entree.component.scss']
})
export class MaintenanceEntreeComponent implements OnInit {

  immobilisations : Immobilisation[]=[];
  etatimmos : EtatImmo[]=[];
  entree : Entree=new Entree();
  constructor(private immobilisationService : ImmobilisationService,
    private etatimmoService : EtatImmoService,
    private entreeService: EntreeService) { }

  ngOnInit() {
    this.getAllImmobilisations();
    this.getAllEtatImmos();
  }
  getAllEtatImmos(){
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
  valider(){
  console.log(this.entree);
  }
}
