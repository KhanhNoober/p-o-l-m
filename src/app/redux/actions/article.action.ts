import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/models/article.model";

export const getArticles = createAction('[Article] Get Articles', props<{ page: number, perPage: number }>());
export const getArticlesSuccess = createAction('[Article] Get Articles Success', props<{ articles: Article[], hasNext: boolean }>());
export const getArticlesFailure = createAction('[Article] Get Articles Failure', props<{ error: string }>());