import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  article$ = new Observable<Article[]>();

  ngOnInit(): void {
    this.httpService.getArticle().then((articles) => {
      this.article$ = articles;
    });
  }
}
