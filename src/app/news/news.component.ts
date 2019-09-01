import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../service/dataservice.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private datasevice : DataserviceService) { }
  article:any;
  ngOnInit() {
    this.datasevice.currentMessage.subscribe(article=>{
      this.article = article;
    });
    
  }
  for

}
