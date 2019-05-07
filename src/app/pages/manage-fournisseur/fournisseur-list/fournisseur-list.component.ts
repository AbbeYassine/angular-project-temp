import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../shared/models/fournisseur';
import { FournisseurService } from '../../../shared/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.scss']
})
export class FournisseurListComponent implements OnInit {
  fourniseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.loadAllFournisseur();
  }

  loadAllFournisseur() {
    this.fournisseurService.getAllFournisseur().subscribe(
        (data: Fournisseur[]) => {
          this.fourniseurs = data;
          console.log(data);
        }
      );
  }

}
