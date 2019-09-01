import { Component, OnInit } from '@angular/core';
import {NewslistService } from './newslist.service';
import {DataserviceService} from '../service/dataservice.service';
import {ArticleService} from '../service/articleservice.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles =[];
  data : any =[];
  articlesByCat :any =[];
  
  constructor( private newslistService :NewslistService,private datasevice : DataserviceService,private articleService : ArticleService ) { 

    this.newslistService.getAllNews().subscribe(data =>{
      console.log("data ",data);
      this.data=data;
      this.articles = this.data.articles;
      console.log("this.newsList ",this.articles);
    });
  }
    ngOnInit() {
      this.articleService.currentMessage.subscribe(article=>{
       // this.articles = article;
        console.log("article in ngOnInit",article);
        if(article != undefined){
          this.articlesByCat = article;
          this.articles =  this.articlesByCat.articles;
        }
      });
  }
  sendArticle(article){
    console.log("article ",article);
    this.datasevice.sendArticle(article);
  }
}
