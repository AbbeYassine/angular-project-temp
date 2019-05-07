import { Component, OnInit } from '@angular/core';

import { FamilleServices } from '../../../shared/services/famille.service';
import { FamilleImmobilisation } from '../../../shared/models/famille-immobilisation';

@Component({
  selector: 'app-famille-list',
  templateUrl: './famille-list.component.html',
  styleUrls: ['./famille-list.component.scss']
})
export class FamilleListComponent implements OnInit {
  familles: FamilleImmobilisation[] = [];

  constructor(private familleService: FamilleServices) { }

  ngOnInit() {
    this.loadAllFamille();
  }

  loadAllFamille() {
    this.familleService.getAllFamille()
      .subscribe(
        (data: FamilleImmobilisation[]) => {
          this.familles = data;
          console.log(data);
        }
      );
  }
}
