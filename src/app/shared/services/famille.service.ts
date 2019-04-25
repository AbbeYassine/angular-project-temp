import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
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
}
