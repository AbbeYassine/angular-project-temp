import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../shared/services/article.service';
import { Transfert } from '../../../shared/models/transfert';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { Emplacement } from '../../../shared/models/emplacement';
import { EmplacementService } from '../../../shared/services/emplacement.service';
import { TransfertService } from '../../../shared/services/transfert.service';

@Component({
  selector: 'app-transfert-ajout',
  templateUrl: './transfert-ajout.component.html',
  styleUrls: ['./transfert-ajout.component.scss']
})
export class TransfertAjoutComponent implements OnInit {
  immobilisations : Immobilisation[]=[];
  emplacements : Emplacement[]=[];
  emplacement : Emplacement;
  transfert : Transfert=new Transfert();
  constructor(private immobilisationService : ImmobilisationService,
    private emplacementService : EmplacementService,
    private transfertService: TransfertService) { }

  ngOnInit() {
    this.getAllImmobilisations();
    this.getAllEmplacements();
  }
  getAllEmplacements(){
    this.emplacementService.getAllEmplacement()
      .subscribe(
        (data: Emplacement[]) => {
          this.emplacements = data;
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
    console.log(this.transfert);
  }
}
