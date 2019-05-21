import { Component, OnInit } from '@angular/core';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { Sortie } from '../../../shared/models/sortie';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { Fournisseur } from '../../../shared/models/fournisseur';
import { FournisseurService } from '../../../shared/services/fournisseur.service';
import { SortieService } from '../../../shared/services/sortie.service';

@Component({
  selector: 'app-maintenance-sortie',
  templateUrl: './maintenance-sortie.component.html',
  styleUrls: ['./maintenance-sortie.component.scss']
})
export class MaintenanceSortieComponent implements OnInit {

  immobilisations : Immobilisation[]=[];
  fournisseurs : Fournisseur[]=[];
  sortie : Sortie=new Sortie();
  constructor(private immobilisationService : ImmobilisationService,
    private fournisseurService : FournisseurService,
    private sortieService: SortieService) { }

  ngOnInit() {
    this.getAllImmobilisations();
    this.getAllFournisseurs();
  }
  getAllFournisseurs(){
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
  valider(){
    console.log(this.sortie);
  }
}
