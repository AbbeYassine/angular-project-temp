import { Component, OnInit } from '@angular/core';
import { Site } from '../../../shared/models/site';
import { SiteService } from '../../../shared/services/site.service';

@Component({
  selector: 'app-site-ajouter',
  templateUrl: './site-ajouter.component.html',
  styleUrls: ['./site-ajouter.component.scss']
})
export class SiteAjouterComponent implements OnInit {
  site : Site=new Site();
  

  constructor() { }

  ngOnInit() {
  }
  valider() {
    console.log(this.site);
    
  }
  


  

}