import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../shared/models/fournisseur';
import { FournisseurService } from '../../../shared/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.scss']
})
export class FournisseurFormComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur();

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
  }
  valider() {
    console.log(this.fournisseur);

    this.fournisseurService.addFournisseur(this.fournisseur)
      .subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=> {
          
        }
      )
    
  }

}
