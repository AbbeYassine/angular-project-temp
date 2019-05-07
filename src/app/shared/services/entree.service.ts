import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Entree } from '../models/entree';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class EntreeService {

  constructor(private http: HttpClient) {
  }

  getAllEntree() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/entrees');
  }

  addEntree(entree: Entree){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/entrees",entree)
  }
}