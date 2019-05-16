import { Component, OnInit } from '@angular/core';

import { FamilleServices } from '../../../shared/services/famille.service';
import { FamilleImmobilisation } from '../../../shared/models/famille-immobilisation';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-famille-list',
  templateUrl: './famille-list.component.html',
  styleUrls: ['./famille-list.component.scss']
})
export class FamilleListComponent implements OnInit {
  familles: FamilleImmobilisation[] = [];
  pageSize = 10;
  pageNumber = 1;

  
  busy : Subscription;

  constructor(private familleService: FamilleServices) { }

  ngOnInit() {
    this.busy = this.familleService.getAllFamille()
    .subscribe(
      (data: FamilleImmobilisation[]) => {
        this.familles = data;
        console.log(data);
      }
    );
}
deleteById(index:number){

  Swal({
    title: 'Are you sure?',
    text:  "Suppression d'une famille",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {

      this.familleService.deleteFamille(this.familles[index].codeFami)       
        .subscribe(
          (data)=>{
            Swal(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
            this.familles.splice(index,1);
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

