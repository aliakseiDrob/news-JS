import AppLoader from './app-loader';
import { Callback } from '../../types/types';
import { checkEventTarget } from '../../utils/utils';

class AppController extends AppLoader {
    getSources<T>(callback: Callback<T>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: Callback<T>): void {
        let target = checkEventTarget(e.target);
        const newsContainer = checkEventTarget(e.currentTarget);

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target.parentNode instanceof HTMLElement) {
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
