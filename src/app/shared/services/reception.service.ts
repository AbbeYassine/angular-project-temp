import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {BonDeReception, BonDeReceptionDTO} from '../models/BonDeReception';
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

  addReception(reception: BonDeReceptionDTO) {
    return this.http.post(Config.baseUrl + '/GestionImmobilisation-core/api/bondereceptions', reception);
  }

  getReceptionById(receptionId: string) {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/bondereceptions' + receptionId);
  }

  editReception(receptionId: string, reception: BonDeReceptionDTO) {
    return this.http.put(Config.baseUrl + '/GestionImmobilisation-core/api/bondereceptions' + receptionId, reception);
  }

  deleteReception(receptionId: string) {
    return this.http.delete(Config.baseUrl + '/GestionImmobilisation-core/api/bondereceptions' + receptionId);
  }
}
