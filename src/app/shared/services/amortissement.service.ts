import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Amortissement } from '../models/amortissement';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class AmortissementService {

  constructor(private http: HttpClient) {
  }

  getAllAmort() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/amortissements');
  }

  addAmort(amortissement : Amortissement){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/amortissements",amortissement)
  }
}
