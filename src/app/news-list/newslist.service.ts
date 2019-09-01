import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {
  category :string;
  constructor(private http: HttpClient) { }
  getAllNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=79d9fae252944a0cafb0de6163e6ff38');
  }
  getAllNewsByCatogery(cat){
    switch(cat) {
      case "Business":
        this.category = "business";
        break;
      case "Entertainment":
        this.category = "entertainment";
        break;
      case "Health":
        this.category = "health";
        break;
      case "Science":
        this.category = "science";
        break;
      case "Sports":
        this.category = "sports";
        break;
      case "Technology":
        this.category = "technology";
        break;       
      default:
        // code block
    }
    console.log("inside news list ",cat);
    var url  = "https://newsapi.org/v2/top-headlines?country=in&category="+this.category+"&apiKey=79d9fae252944a0cafb0de6163e6ff38"
    console.log("url ",url);
    return this.http.get(url);
  }
}
