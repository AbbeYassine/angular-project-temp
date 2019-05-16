import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Emplacement} from '../models/emplacement';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class EmplacementService {

  constructor(private http: HttpClient) {
  }

  getAllEmplacement() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements');
  }

  addEmplacement(emplacement: Emplacement) {
    return this.http.post(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements', emplacement);
  }

  getEmplacementById(emplacementId: string) {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements' + emplacementId);
  }

  editEmplacement(emplacementId: string, emplacement: Emplacement) {
    return this.http.put(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements' + emplacementId, emplacement);
  }

  deleteEmplacement(emplacementId: string) {
    return this.http.delete(Config.baseUrl + '/GestionImmobilisation-core/api/emplacements' + emplacementId);
  }
}
