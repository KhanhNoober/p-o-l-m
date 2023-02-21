import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as ArticleActions from "../actions/article.action";
import { Article } from "src/app/models/article.model";
import { HttpService } from "src/app/services/http.service";

@Injectable()
export class ArticleEffects {
    constructor(private actions$: Actions, private httpService: HttpService) { }

    getArticles$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.getArticles),
        switchMap((action) => this.httpService.getArticle(action.page, action.perPage)),
        map((articles: any) => {
            return ArticleActions.getArticlesSuccess({ articles: <Array<Article>>articles, hasNext: false })
        }),
        catchError((error) => of(ArticleActions.getArticlesFailure({ error })))
    ));
}