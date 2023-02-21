import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getArticle(page: number, perPage: number) {
    let response = this.httpClient.get(`https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`)
    return response;
  }

  getHasNextPage(page: number, perPage: number) {
    let response = this.httpClient.get(`https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`)
    return lastValueFrom(response);
  }
}
