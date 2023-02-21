import { Article } from "../../models/article.model";

export interface ArticleState {
    articles: Article[];
    isLoading: boolean;
    isSuccessful: boolean;
    error: string;
    hasNextPage: boolean;
}