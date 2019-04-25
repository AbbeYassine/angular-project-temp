import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class EmplacementServices {

  constructor(private http: HttpClient) {
  }

  getAllEmplacements() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements');
  }
}
