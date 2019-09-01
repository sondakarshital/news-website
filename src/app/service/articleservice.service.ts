import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {NewslistService } from '../news-list/newslist.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  data:any
  constructor(private newslistService:NewslistService) { }
  
  getArticlesByCatogery(cat){
    this.messageSource.next(this.data);
    this.newslistService.getAllNewsByCatogery(cat).subscribe(news =>{
      this.data =news;
      this.messageSource.next(this.data);
    });
  }
}
