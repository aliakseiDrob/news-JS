import AppController from '../controller/controller';
import { AppView } from '../view/app-view';
import { getDocumentElement } from '../../utils/utils';
import { NewsResponce, SourcesResponse } from '../../types/types';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = getDocumentElement('.sources');
        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: NewsResponce) => this.view.drawNews(data))
        );
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
