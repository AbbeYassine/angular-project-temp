import { Component, OnInit } from '@angular/core';
import { Transfert } from '../../../shared/models/transfert';
import { Subscription } from 'rxjs';
import { TransfertService } from '../../../shared/services/transfert.service';
import { Immobilisation } from '../../../shared/models/immobilisation';
import { ImmobilisationService } from '../../../shared/services/immobilisation.service';

@Component({
  selector: 'app-transfert-list',
  templateUrl: './transfert-list.component.html',
  styleUrls: ['./transfert-list.component.scss']
})
export class TransfertListComponent implements OnInit {
  transferts: Transfert[] = [];
  immobiliations: Immobilisation[] = [];
  pageSize = 10;
  pageNumber = 1;

  busy : Subscription;
  constructor(private transfertService: TransfertService,
    private immobilisationService: ImmobilisationService ) { }

  ngOnInit() {
    this.busy = this.transfertService.getAllTransfert()
      .subscribe(
        (data: Transfert[]) => {
          this.transferts = data;
          console.log(this.transferts);
        }
      );
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


}
