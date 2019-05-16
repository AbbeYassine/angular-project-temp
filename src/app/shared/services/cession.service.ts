import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Cession } from '../models/cession';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class CessionService {

  constructor(private http: HttpClient) {
  }

  getAllCession() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/cessions');
  }

  addCession(cession : Cession){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/cessions",cession)
  }
  getCessionById(cessionId : number){
    return this.http.get(Config.baseUrl + "/GestionImmobilisation-core/api/cessions"+cessionId);
  }
  editCession(cessionId : number ,cession : Cession){
    return this.http.put(Config.baseUrl + "/GestionImmobilisation-core/api/cessions"+cessionId,cession );
  }
}