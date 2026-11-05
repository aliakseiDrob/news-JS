import { NewsData } from '../../../types/types';
import { getDocumentElement, cloneElement, getElement } from '../../../utils/utils';
import './news.css';

const startIndex = 0;
const maxOnPage = 10;
const dateLength = 10;

class News {
    draw(data: NewsData[]): void {
        const news = data.slice(startIndex, maxOnPage);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getDocumentElement<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, index) => {
            const newsClone = cloneElement(newsItemTemp);

            const newsItem = getElement<HTMLDivElement>(newsClone, '.news__item');

            if (index % 2) newsItem.classList.add('news__item-reverse');

            const newsMetaPhoto = getElement<HTMLLIElement>(newsClone, '.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'assets/news_placeholder.png'})`;

            const newsMetaAuthor = getElement<HTMLLIElement>(newsClone, '.news__meta-author');
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate = getElement<HTMLLIElement>(newsClone, '.news__meta-date');
            newsMetaDate.textContent = item.publishedAt.slice(startIndex, dateLength).split('-').reverse().join('-');

            const newsDescriptionTitle = getElement<HTMLHeadingElement>(newsClone, '.news__description-title');
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource = getElement<HTMLHeadingElement>(newsClone, '.news__description-source');
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent = getElement<HTMLParagraphElement>(newsClone, '.news__description-content');
            newsDescriptionContent.textContent = item.description;

            const newsReadMoreLink = getElement<HTMLAnchorElement>(newsClone, '.news__read-more a');
            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = getDocumentElement<HTMLDivElement>('.news');
        newsContainer.replaceChildren(fragment);
    }
}

export default News;
