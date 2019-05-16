import {Component, OnInit} from '@angular/core';
import {SiteService} from '../../../shared/services/site.service';
import {Site} from '../../../shared/models/site';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-site-liste',
  templateUrl: './site-liste.component.html',
  styleUrls: ['./site-liste.component.scss']
})
export class SiteListeComponent implements OnInit {
  sites: Site[] = [];
  pageSize = 10;
  pageNumber = 1;

  busy : Subscription;
  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.busy = this.siteService.getAllSite()
    .subscribe(
      (data: Site[])=>
    {
      this.sites=data;
      console.log(data)
    }
    );
  }
  deleteById(index:number){

    Swal({
      title: 'Are you sure?',
      text:  "Suppression d'une site",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.siteService.deleteSite(this.sites[index].codeSite)
          .subscribe(
            (data)=>{
              Swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )
              this.sites.splice(index,1);
            }
          )
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}