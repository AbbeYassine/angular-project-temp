import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { User } from '../models/user';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class UserService{

  constructor(private http: HttpClient) {
  }

  getAllUser() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/users');
  }

  addUser(user: User){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/users",user)
  }
}