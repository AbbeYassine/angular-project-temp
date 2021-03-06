import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { LigneReception } from '../models/LigneReception';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class LigneService {

  constructor(private http: HttpClient) {
  }

  getAllLigne() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/lignereceptions');
  }

  addLigne(ligne : LigneReception){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/lignereceptions",ligne)
  }
}