import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Transfert } from '../models/transfert';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class TransfertService {

  constructor(private http: HttpClient) {
  }

  getAllTransfert() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/transferts');
  }

  addTransfert(transfert: Transfert){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/transferts",transfert)
  }
}