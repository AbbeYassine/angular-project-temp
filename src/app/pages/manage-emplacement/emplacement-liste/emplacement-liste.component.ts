import { Component, OnInit } from '@angular/core';
import { Emplacement } from '../../../shared/models/emplacement';
import { EmplacementService } from '../../../shared/services/emplacement.service';

@Component({
  selector: 'app-emplacement-liste',
  templateUrl: './emplacement-liste.component.html',
  styleUrls: ['./emplacement-liste.component.scss']
})
export class EmplacementListeComponent implements OnInit {
  emplacements : Emplacement[]=[];
  
  constructor(protected emplacemenService: EmplacementService) { }

  ngOnInit() {
    this.loadAllEmplacement();
  }
  loadAllEmplacement(){
    this.emplacemenService.getAllEmplacement()
    .subscribe(
      (data: Emplacement[])=>
    {
      this.emplacements=data;
      console.log(data)
    }
    );
  }

}

  
