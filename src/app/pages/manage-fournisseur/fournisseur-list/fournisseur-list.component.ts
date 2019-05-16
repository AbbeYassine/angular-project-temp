import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../shared/models/fournisseur';
import { FournisseurService } from '../../../shared/services/fournisseur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.scss']
})
export class FournisseurListComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  pageSize = 10;
  pageNumber = 1;

  busy : Subscription;

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.busy = this.fournisseurService.getAllFournisseur()
      .subscribe(
        (data: Fournisseur[]) => {
          this.fournisseurs = data;
          console.log(this.fournisseurs);
        }
      );
  }
  deleteById(index:number){

    Swal({
      title: 'Are you sure?',
      text:  "Suppression d'un fournisseur",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.fournisseurService.deleteFournisseur(this.fournisseurs[index].codeFr)
          .subscribe(
            (data)=>{
              Swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )
              this.fournisseurs.splice(index,1);
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
