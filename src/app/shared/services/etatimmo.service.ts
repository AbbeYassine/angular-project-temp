import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { EtatImmo } from '../models/etatimmo';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class EtatImmoService {

  constructor(private http: HttpClient) {
  }

  getAllEtatImmo() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/etatimmos');
  }

  addEtatImmo(etatimmo: EtatImmo){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/etatimmos",etatimmo)
  }
}