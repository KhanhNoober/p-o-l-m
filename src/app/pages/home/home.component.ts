import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ArticleState } from 'src/app/redux/states/article.state';
import { HttpService } from 'src/app/services/http.service';

import * as ArticleActions from 'src/app/redux/actions/article.action';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService, private store: Store<{ articles: ArticleState }>) { }

  articles$ = new Observable<ArticleState>();

  currentPage = 1;

  ngOnInit(): void {
    this.articles$ = this.store.select('articles');
    this.store.dispatch(ArticleActions.getArticles({ page: 1, perPage: 10 }));
  }

  loadNextPage(): void {
    this.currentPage += 1;
    this.store.dispatch(ArticleActions.getArticles({ page: this.currentPage, perPage: 10 }));
    window.scrollTo(0, 0);
  }

  loadPreviousPage(): void {
    this.currentPage -= 1;
    this.store.dispatch(ArticleActions.getArticles({ page: this.currentPage, perPage: 10 }));
    window.scrollTo(0, 0);
  }
}
