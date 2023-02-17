import User from './user.model';

export interface Article {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    url: string;
    user: User;
}