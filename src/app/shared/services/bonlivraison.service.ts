import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { BonLivraisonFr } from '../models/BonLivraisonFr';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class BonLivraisonService {

  constructor(private http: HttpClient) {
  }

  getAllLivraison() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/bonlivraisonfrs');
  }

  addLivraison(livraison : BonLivraisonFr){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/bonlivraisonfrs",livraison)
  }
}