import { Component, OnInit } from '@angular/core';
import { BonDeReception } from '../../../shared/models/BonDeReception';
import { BonLivraisonFr } from '../../../shared/models/BonLivraisonFr';
import { ReceptionService } from '../../../shared/services/reception.service';
import { BonLivraisonService } from '../../../shared/services/bonlivraison.service';

@Component({
  selector: 'app-reception-list',
  templateUrl: './reception-list.component.html',
  styleUrls: ['./reception-list.component.scss']
})
export class ReceptionListComponent implements OnInit {
  bondereception: BonDeReception[]=[];
  bonlivraisonfr: BonLivraisonFr[]=[]; 
  constructor(private receptionServices: ReceptionService,
    private bonlivraisonServices: BonLivraisonService)
     { }

  ngOnInit() {
      this.loadAllReception();
      this.loadAllLivraison();
    }
  
    loadAllReception() {
      this.receptionServices.getAllReception()
        .subscribe(
          (data: BonDeReception[]) => {
            this.bondereception = data;
            console.log(data);
          }
        );
    }
    loadAllLivraison() {
      this.bonlivraisonServices.getAllLivraison()
        .subscribe(
          (data: BonLivraisonFr[]) => {
            this.bonlivraisonfr = data;
            console.log(data);
          }
        );
    }
}
