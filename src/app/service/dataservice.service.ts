import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {NewslistService } from '../news-list/newslist.service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  data:any
  constructor(private newslistService:NewslistService) { }
  sendArticle(article){
    this.messageSource.next(article);
  }
}
