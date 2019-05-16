import { Component, OnInit } from '@angular/core';
import { Emplacement } from '../../../shared/models/emplacement';
import { Site } from '../../../shared/models/site';
import { Subscription } from 'rxjs';
import { SiteService } from '../../../shared/services/site.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmplacementService } from '../../../shared/services/emplacement.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-emplacement-form',
  templateUrl: './emplacement-form.component.html',
  styleUrls: ['./emplacement-form.component.scss']
})
export class EmplacementFormComponent implements OnInit {

  emplacement: Emplacement = new Emplacement();
  sites: Site[] = [];
  emplacementId:string;
  busy : Subscription;
  constructor(private emplacementServices: EmplacementService,
              private siteServices: SiteService,
              private router: Router,
              private route : ActivatedRoute) {

                this.emplacementId = this.route.snapshot.paramMap.get("emplacementId");
  }

  ngOnInit() {

    this.getAllSites();

    if(this.emplacementId){
      this.emplacementServices.getEmplacementById(this.emplacementId)
        .subscribe(
          (data : Emplacement)=>{
            this.emplacement = data;
          }
        )
    }
  }

  valider() {
    console.log(this.emplacement);
    if(!this.emplacementId){
    this.busy = this.emplacementServices.addEmplacement(this.emplacement)
      .subscribe(
        (data) => {
          console.log(data);

          swal("Succés","Add emplacement success","success");
          this.router.navigate(['/pages/manage-emplacement/emplacement-liste']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.emplacementServices.editEmplacement(this.emplacementId,this.emplacement)
        .subscribe(
          (data)=>{
            swal("Succés","Edit emplacement success","success");
            this.router.navigate(['/pages/manage-emplacement/emplacement-liste']);
          }
        )
    }

  }

  private getAllSites() {
    this.siteServices.getAllSite()
      .subscribe(
        (data: Site[]) => {
          this.sites = data;
        }
      );
  }
}
