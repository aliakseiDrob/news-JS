import News from './news/news';
import Sources from './sources/sources';
import { SourcesResponse, NewsResponce } from '../../types/types';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponce) {
        this.news.draw(data?.articles ?? []);
    }

    drawSources(data: SourcesResponse) {
        this.sources.draw(data?.sources ?? []);
    }
}

export default AppView;
