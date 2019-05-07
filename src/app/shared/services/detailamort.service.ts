import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { DetailAmort } from '../models/detailamort';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class DetailAmortService {

  constructor(private http: HttpClient) {
  }

  getAllDetailAmort() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/detailamorts');
  }

  addDetailAmort(detailAmort : DetailAmort){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/detailamorts",detailAmort)
  }
}