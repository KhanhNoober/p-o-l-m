import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  async getArticle() {
    let response = this.httpClient.get('https://social.runwayclub.dev/api/articles/latest');
    return response.pipe(
      map((article) => { return <Article[]>article; })
    );
  }
}
