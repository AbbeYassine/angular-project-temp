
import { Fournisseur } from "../models/fournisseur";
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */
@Injectable()
export class FournisseurService {

  constructor(private http: HttpClient) {
  }

  getAllFournisseur() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/fournisseurs');
  }
   
  addFournisseur(fournisseur : Fournisseur){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/fournisseurs",fournisseur)
  }
  getFournisseurById(fournisseurId : string){
    return this.http.get(Config.baseUrl + "/GestionImmobilisation-core/api/fournisseurs"+fournisseurId );
  }
  editFournisseur(fournisseurId  : string ,fournisseur : Fournisseur){
    return this.http.put(Config.baseUrl + "/GestionImmobilisation-core/api/fournisseurs"+fournisseurId ,fournisseur );
  }
  deleteFournisseur(fournisseurId  :string){
    return this.http.delete(Config.baseUrl +"/GestionImmobilisation-core/api/fournisseurs"+fournisseurId  );
  }

}