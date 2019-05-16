import { Component, OnInit } from '@angular/core';
import { Cession } from '../../../shared/models/cession';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { DetailAmort } from '../../../shared/models/detailamort';
import { CessionService } from '../../../shared/services/cession.service';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';
import { DetailAmortService } from '../../../shared/services/detailamort.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cession-form',
  templateUrl: './cession-form.component.html',
  styleUrls: ['./cession-form.component.scss']
})
export class CessionFormComponent implements OnInit {
  cession: Cession = new Cession();
  immobilisations: Immobilisation[] = [];
  detailamorts: DetailAmort[] = [];
  cessionId:number;
  busy : Subscription;
  constructor(private detailamortServices: DetailAmortService,
              private immobilisationServices: ImmobilisationService,
              private cessionServices: CessionService,
              private router: Router,
              private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllImmobilisations();
    this.getAllDetailAmorts();

    if(this.cessionId){
      this.cessionServices.getCessionById(this.cessionId)
        .subscribe(
          (data : Cession)=>{
            this.cession = data;
          }
        )
    }
  }

  valider() {
    console.log(this.cession);
    if(!this.cessionId){
    this.busy = this.cessionServices.addCession(this.cession)
      .subscribe(
        (data) => {
          console.log(data);

          swal("Succés","Add cession success","success");
          this.router.navigate(['/pages/manage-cession/cession-list']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.cessionServices.editCession(this.cessionId,this.cession)
        .subscribe(
          (data)=>{
            swal("Succés","Edit cession success","success");
            this.router.navigate(['/pages/manage-cession/cession-list']);
          }
        )
    }

  }

  private getAllDetailAmorts() {
    this.detailamortServices.getAllDetailAmort()
      .subscribe(
        (data: DetailAmort[]) => {
          this.detailamorts = data;
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
