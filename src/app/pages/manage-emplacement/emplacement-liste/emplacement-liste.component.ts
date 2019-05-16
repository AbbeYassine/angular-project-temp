import {Component, OnInit} from '@angular/core';
import {Emplacement} from '../../../shared/models/emplacement';
import {EmplacementService} from '../../../shared/services/emplacement.service';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emplacement-liste',
  templateUrl: './emplacement-liste.component.html',
  styleUrls: ['./emplacement-liste.component.scss']
})
export class EmplacementListeComponent implements OnInit {
  emplacements: Emplacement[] = [];
  pageSize = 10;
  pageNumber = 1;

  busy: Subscription;

  constructor(private emplacementService: EmplacementService) {
  }

  ngOnInit() {
    this.busy = this.emplacementService.getAllEmplacement()
      .subscribe(
        (data: Emplacement[]) => {
          this.emplacements = data;
          console.log(data);
        }
      );
  }

  deleteById(index: number) {

    Swal({
      title: 'Are you sure?',
      text: 'Suppression d\'un emplacement',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.emplacementService.deleteEmplacement(this.emplacements[index].codeEmp)
          .subscribe(
            (data) => {
              Swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              );
              this.emplacements.splice(index, 1);
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

  
