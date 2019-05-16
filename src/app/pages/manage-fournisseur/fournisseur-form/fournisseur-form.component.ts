import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../shared/models/fournisseur';
import { FournisseurService } from '../../../shared/services/fournisseur.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.scss']
})
export class FournisseurFormComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur();
  fournisseurId: string;
  busy : Subscription;

  constructor(private fournisseurService: FournisseurService,
    private router: Router,
    private route : ActivatedRoute) {
    this.fournisseurId = this.route.snapshot.paramMap.get("fournisseurId");
   }

  ngOnInit() {
    
    if(this.fournisseurId){
      this.fournisseurService.getFournisseurById(this.fournisseurId)
        .subscribe(
          (data : Fournisseur)=>{
            this.fournisseur = data;
          }
        )
    }
  }
  valider() {
      console.log(this.fournisseur);
      if(!this.fournisseurId){
      this.busy = this.fournisseurService.addFournisseur(this.fournisseur)
        .subscribe(
          (data) => {
            console.log(data);
  
            swal("Succés","Add fournisseur success","success");
            this.router.navigate(['/pages/manage-fournisseur/fournisseur-list']);
          },
          (error) => {
  
          }
        );
      }else {
        this.busy = this.fournisseurService.editFournisseur(this.fournisseurId,this.fournisseur)
          .subscribe(
            (data)=>{
              swal("Succés","Edit fournisseur success","success");
              this.router.navigate(['/pages/manage-fournisseur/fournisseur-list']);
            }
          )
      }
  
    }

}
