import { Component, OnInit } from '@angular/core';
import { BonDeReception } from '../../../shared/models/BonDeReception';
import { Subscription } from 'rxjs';
import { BonLivraisonFr } from '../../../shared/models/BonLivraisonFr';
import { ReceptionService } from '../../../shared/services/reception.service';
import { BonLivraisonService } from '../../../shared/services/bonlivraison.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LigneService } from '../../../shared/services/ligne.service';
import { LigneReception } from '../../../shared/models/LigneReception';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.component.html',
  styleUrls: ['./reception-form.component.scss']
})
export class ReceptionFormComponent implements OnInit {
  bondereceptions: BonDeReception = new BonDeReception();
  bonlivraisonfr: BonLivraisonFr[] = [];
  lignereception: LigneReception[] =[];
  receptionId:string;
  busy : Subscription;
  constructor(private bonlivraisonService: BonLivraisonService,
              private receptionServices: ReceptionService,
              private ligneServices: LigneService,
              private router: Router,
              private route : ActivatedRoute) {

                this.receptionId = this.route.snapshot.paramMap.get("receptionId");
  }
 ngOnInit() {
    this.getAllLivraisons();
    this.getAllLignes();

    if(this.receptionId){
      this.receptionServices.getReceptionById(this.receptionId)
        .subscribe(
          (data : BonDeReception)=>{
            this.bondereceptions = data;
          }
        )
    }
  }
 valider() {
    console.log(this.bondereceptions);
    if(!this.receptionId){
    this.busy = this.receptionServices.addReception(this.bondereceptions)
      .subscribe(
        (data) => {
          console.log(data);
          swal("Succés","Add Reception success","success");
          this.router.navigate(['/pages/manage-reception/reception-list']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.receptionServices.editReception(this.receptionId,this.bondereceptions)
        .subscribe(
          (data)=>{
            swal("Succés","Edit reception success","success");
            this.router.navigate(['/pages/manage-reception/reception-list']);
          }
        )
    }

  }

  private getAllLivraisons() {
    this.bonlivraisonService.getAllLivraison()
      .subscribe(
        (data: BonLivraisonFr[]) => {
          this.bonlivraisonfr = data;
        }
      );
  }

  private getAllLignes() {

    this.ligneServices.getAllLigne()
      .subscribe(
        (data: LigneReception[]) => {
          this.lignereception = data;
        }
      );

  }
}