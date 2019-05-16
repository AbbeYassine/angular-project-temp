import { Component, OnInit } from '@angular/core';
import { FamilleImmobilisation } from '../../../shared/models/famille-immobilisation';
import { FamilleServices } from '../../../shared/services/famille.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-famille-form',
  templateUrl: './famille-form.component.html',
  styleUrls: ['./famille-form.component.scss']
})
export class FamilleFormComponent implements OnInit {
  famille: FamilleImmobilisation = new FamilleImmobilisation();
  familleId:number;
  busy : Subscription;

  constructor(private familleServices: FamilleServices,
    private router: Router,
              private route : ActivatedRoute){}

  ngOnInit() {
    if(this.familleId){
    this.familleServices.getFamilleById(this.familleId)
      .subscribe(
        (data : FamilleImmobilisation)=>{
          this.famille = data;
        }
      )
  }
} 
valider(){
    console.log(this.famille);
    if(!this.familleId){
    this.busy = this.familleServices.addFamille(this.famille)
      .subscribe(
        (data) => {
          console.log(data);

          swal("Succés","Add famille success","success");
          this.router.navigate(['/pages/manage-famille/famille-list']);
        },
        (error) => {

        }
      );
    }else {
      this.busy = this.familleServices.editFamille(this.familleId,this.famille)
        .subscribe(
          (data)=>{
            swal("Succés","Edit famille success","success");
            this.router.navigate(['/pages/manage-famille/famille-list']);
          }
        )
        }
      }
    }