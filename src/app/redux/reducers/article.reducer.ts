import { createReducer, on } from "@ngrx/store";
import { Article } from "src/app/models/article.model";
import * as ArticleActions from "../actions/article.action";
import { ArticleState } from "../states/article.state";

export const initialSate: ArticleState = {
    articles: [],
    error: "",
    isLoading: false,
    isSuccessful: false,
    hasNextPage: false
}

export const articleReducer = createReducer(
    initialSate,
    on(ArticleActions.getArticles, (state) => {
        return { ...state, isLoading: true, isSuccessful: false, error: "" }
    }),
    on(ArticleActions.getArticlesSuccess, (state, { articles }) => {
        return { ...state, isLoading: false, isSuccessful: true, articles: articles }
    }),
    on(ArticleActions.getArticlesFailure, (state, { error }) => {
        return { ...state, isLoading: false, isSuccessful: false, error: error }
    })
)