import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Immobilisation } from '../models/immobilisation';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class ImmobilisationService {

  constructor(private http: HttpClient) {
  }

  getAllImmo() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/immobilisations');
  }

  addImmo(immobilisation: Immobilisation){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/immobilisations",immobilisation)
  }
}