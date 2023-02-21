import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from '../redux/states/article.state';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private store: Store<{ articles: ArticleState }>) { }

  artibaleState$ = this.store.select('articles');

  getArticles() {
    let articles: any = []

    this.artibaleState$.subscribe((data) => {
      articles = data.articles;
    });

    return articles;
  }

  getArticle(id: number) {
    let article: any = {}

    this.artibaleState$.subscribe((data) => {
      article = data.articles.find((article: any) => article.id === id);
    });

    return article;
  }
}
