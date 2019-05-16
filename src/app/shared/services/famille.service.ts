import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { FamilleImmobilisation } from '../models/famille-immobilisation';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class FamilleServices {

  constructor(private http: HttpClient) {
  }

  getAllFamille() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/familleimmobilisations');
  }
  addFamille(famille : FamilleImmobilisation){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/familleimmobilisations",famille)
  }
  getFamilleById(familleId : number){
    return this.http.get(Config.baseUrl + "/GestionImmobilisation-core/api/familleimmobilisations/"+familleId);
  }
  editFamille(familleId : number,famille : FamilleImmobilisation){
    return this.http.put(Config.baseUrl + "/GestionImmobilisation-core/api/familleimmobilisations/"+familleId,famille );
  }
  deleteFamille(familleId :number){
    return this.http.delete(Config.baseUrl +"/GestionImmobilisation-core/api/familleimmobilisations/"+familleId );
  }
}
