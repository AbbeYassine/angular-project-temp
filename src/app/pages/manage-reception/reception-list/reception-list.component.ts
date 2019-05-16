import {Component, OnInit} from '@angular/core';
import {BonDeReception} from '../../../shared/models/BonDeReception';
import {BonLivraisonFr} from '../../../shared/models/BonLivraisonFr';
import {ReceptionService} from '../../../shared/services/reception.service';
import {BonLivraisonService} from '../../../shared/services/bonlivraison.service';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reception-list',
  templateUrl: './reception-list.component.html',
  styleUrls: ['./reception-list.component.scss']
})
export class ReceptionListComponent implements OnInit {
  bondereception: BonDeReception[] = [];
  bonlivraisonfr: BonLivraisonFr[] = [];
  busy: Subscription;

  pageNumber: any;

  constructor(private receptionServices: ReceptionService,
              private bonlivraisonServices: BonLivraisonService) {
  }

  ngOnInit() {
    this.busy = this.receptionServices.getAllReception()
      .subscribe(
        (data: BonDeReception[]) => {
          this.bondereception = data;
          console.log(this.bondereception);
        }
      );
  }

  deleteById(index: number) {

    Swal({
      title: 'Are you sure?',
      text: 'Suppression d\'un bon de reception',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.receptionServices.deleteReception(this.bondereception[index].numeroBonRecep)
          .subscribe(
            (data) => {
              Swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              );
              this.bondereception.splice(index, 1);
            }
          );

        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


}

