export enum ResponseStatus {
    Unauthorized = 401,
    NotFound = 404,
}

export interface NewsResponce {
    status: Status;
    totalResults: number;
    articles: NewsData[];
}

export interface NewsData {
    source: NewsSource;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}

export interface SourcesResponse {
    status: Status;
    sources?: Source[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type Paths = 'sources' | 'everything';

export interface Request {
    endpoint: Paths;
    options?: Record<string, string>;
}

export type HttpMethods = 'GET' | 'POST';

export type Callback<T> = (data: T) => void;

type Status = 'ok' | 'error';

type NewsSource = {
    id: string;
    name: string;
};
