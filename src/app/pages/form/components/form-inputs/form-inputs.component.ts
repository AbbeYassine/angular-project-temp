import {Component, OnInit} from '@angular/core';
import {FamilleImmobilisation} from '../../../../shared/models/famille-immobilisation';
import {FamilleServices} from '../../../../shared/services/famille.service';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.scss']
})
export class FormInputsComponent implements OnInit {

  famillesImmobilisation: FamilleImmobilisation[] = [];

  constructor(private familleServices: FamilleServices) {
  }

  ngOnInit() {
    this.getAllFamilles();
  }

  private getAllFamilles() {
    this.familleServices.getAllFamille()
      .subscribe(
        (data: FamilleImmobilisation[]) => {
          this.famillesImmobilisation = data;
        }
      );
  }
}
