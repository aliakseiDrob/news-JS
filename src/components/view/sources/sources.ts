import { Source } from '../../../types/types';
import { cloneElement, getDocumentElement, getElement } from '../../../utils/utils';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getDocumentElement<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = cloneElement(sourceItemTemp);

            const sourceItemName = getElement<HTMLSpanElement>(sourceClone, '.source__item-name');
            sourceItemName.textContent = item.name;

            const sourceItem = getElement<HTMLDivElement>(sourceClone, '.source__item');
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesList = getDocumentElement<HTMLDivElement>('.sources');
        sourcesList.append(fragment);
    }
}

export default Sources;
