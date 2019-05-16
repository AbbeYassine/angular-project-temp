import {Component, OnInit} from '@angular/core';
import {Site} from '../../../shared/models/site';
import { SiteService } from '../../../shared/services/site.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-site-ajouter',
  templateUrl: './site-ajouter.component.html',
  styleUrls: ['./site-ajouter.component.scss']
})
export class SiteAjouterComponent implements OnInit {
  site: Site = new Site();
  siteId: number;
  busy : Subscription;
  constructor(private siteServices: SiteService,
              private router: Router,
              private route : ActivatedRoute) {

  }

  ngOnInit() {
     if(this.siteId){
  this.siteServices.getSiteById(this.siteId)
        .subscribe(
          (data : Site)=>{
            this.site = data;
          }
        )
    }
  }

  valider() {
    console.log(this.site);
    if(!this.siteId){
    this.busy = this.siteServices.addSite(this.site)
      .subscribe(
        (data) => {
          console.log(data);

          swal("Succés","Add site success","success");
          this.router.navigate(['/pages/manage-site/site-liste']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.siteServices.editSite(this.siteId,this.site)
        .subscribe(
          (data)=>{
            swal("Succés","Edit emplacement success","success");
            this.router.navigate(['/pages/manage-site/site-liste']);
          }
        )
    }

  }

 
  }
