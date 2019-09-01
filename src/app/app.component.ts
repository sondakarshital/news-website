import { Component } from '@angular/core';
import {ArticleService} from './service/articleservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  catogary = 'news-website';
  constructor(private articleService : ArticleService){}
  catogery($event){
    this.catogary =$event.target.textContent;
    console.log("cat ",this.catogary);
    this.articleService.getArticlesByCatogery(this.catogary);
  }
}
