import { Component, OnInit } from '@angular/core';
import { FamilleImmobilisation } from '../../../shared/models/famille-immobilisation';
import { FamilleServices } from '../../../shared/services/famille.service';

@Component({
  selector: 'app-famille-form',
  templateUrl: './famille-form.component.html',
  styleUrls: ['./famille-form.component.scss']
})
export class FamilleFormComponent implements OnInit {
  famille: FamilleImmobilisation = new FamilleImmobilisation();

  constructor(private familleServices: FamilleServices) { }

  ngOnInit() {
  }

  valider() {
    console.log(this.famille);

    this.familleServices.addFamille(this.famille)
      .subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=> {
          
        }
      )
    
  }

}
