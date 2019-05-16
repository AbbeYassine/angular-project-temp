import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Site } from '../models/site';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class SiteService {

  constructor(private http: HttpClient) {
  }

  getAllSite() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/sites');
  }
  addSite(site : Site){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/sites",site)
  }
  getSiteById(siteId : number){
    return this.http.get(Config.baseUrl + "/GestionImmobilisation-core/api/sites"+siteId);
  }
  editSite(siteId : number,site : Site){
    return this.http.put(Config.baseUrl + "/GestionImmobilisation-core/api/sites"+siteId,site );
  }
  deleteSite(siteId :number){
    return this.http.delete(Config.baseUrl +"/GestionImmobilisation-core/api/sites"+siteId  );
  }
}
