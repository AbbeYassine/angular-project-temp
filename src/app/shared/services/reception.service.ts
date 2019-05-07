import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { BonDeReception } from '../models/BonDeReception';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class ReceptionService {

  constructor(private http: HttpClient) {
  }

  getAllReception() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/bondereceptions');
  }

  addReception(reception : BonDeReception){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/bondereceptions",reception)
  }
}