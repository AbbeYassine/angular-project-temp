import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import { Article } from '../models/article';
/* models */

/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getAllArticle() {
    return this.http.get(Config.baseUrl + '/GestionImmobilisation-core/api/articles');
  }

  addArticle(article : Article){
    return this.http.post(Config.baseUrl + "/GestionImmobilisation-core/api/articles",article)
  }
}
