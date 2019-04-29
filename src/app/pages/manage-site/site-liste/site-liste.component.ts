import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../shared/services/site.service';
import { Site } from '../../../shared/models/site';

@Component({
  selector: 'app-site-liste',
  templateUrl: './site-liste.component.html',
  styleUrls: ['./site-liste.component.scss']
})
export class SiteListeComponent implements OnInit {
  sites : Site[]=[];
  constructor(protected siteService: SiteService) { }

  ngOnInit() {
    this.loadAllSite();
  }
  loadAllSite(){
    this.siteService.getAllSite()
    .subscribe(
      (data: Site[])=>
    {
      this.sites=data;
      console.log(data)
    }
    );
  }

}
