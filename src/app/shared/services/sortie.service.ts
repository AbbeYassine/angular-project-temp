import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {Sortie} from '../models/sortie';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class SortieService {

  constructor(private http: HttpClient) {
  }

  getAllSortie() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/sorties');
  }

  addEntree(sortie: Sortie) {
    return this.http.post(Config.baseUrl + '/GestionImmobilisation-core/api/sorties', sortie);
  }

  getSortieById(sortieId: string) {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/sorties' + sortieId);
  }
}
