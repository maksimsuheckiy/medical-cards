import Component from "./Component.js";
import API from "../utils/API.js";
import Home from "../containers/Home.js";
import {homeClasses} from "../utils/configs.js";
import {spaceCapitalLetters} from "../utils/regExp.js";

export default class Card extends Component {
    visibleMoreInfo;

    constructor(classes, cardData) {
        const elements = {
            parent: document.querySelector('.main__content') || cardData.parent,
            self: document.createElement('div'),
            cardBody: document.createElement('div'),
            cardTitle: document.createElement('h5'),
            cardSubtitle: document.createElement('h6'),
            cardInfo: document.createElement('p'),
            cardControlWrapper: document.createElement('div'),
            deleteCardBtn: document.createElement('button'),
            showMoreBtn: document.createElement('button'),
            editCardBtn: document.createElement('button')
        }

        super(elements, classes);
        this.cardData = cardData;
    }

    async removeVisit(id) {
        const api =  new API(process.env.API_URL);
        const headers = api.getHeaders(true);
        const response = await api.DELETE(headers, id);

        if (response.status >= 200 && response.status <= 299) {
            this.elements.self.remove();
            const visits = JSON.parse(localStorage.getItem('visits'));
            const filteredVisits = visits.filter(visit => visit.id !== id);
            localStorage.setItem('visits', JSON.stringify(filteredVisits));
            new Home(homeClasses).reRender();
        }
    }

    renderMoreInfo(fields) {
        const additionalInfoList = document.createElement('ul');
        additionalInfoList.classList.add(...['pt-3', 'mb-4', 'border-top', 'border-bottom']);

        for (const field in fields) {
            const additionalInfoItem = document.createElement('li');
            const additionalInfoTitle = document.createElement('p');
            const additionalInfoValue = document.createElement('p');

            const fieldTitle = field.replace(spaceCapitalLetters, ' $1').trim();
            const titleArr = fieldTitle.split(' ');

            const title = titleArr.map((word, index) => {
                if (index === 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1)
                } else {
                    return word.toLowerCase()
                }
            }).join(' ');

            additionalInfoTitle.classList.add(...['fw-bolder', 'mb-1']);
            additionalInfoTitle.textContent = `${title}: `;

            additionalInfoValue.classList.add('mb-2')
            additionalInfoValue.textContent = fields[field];

            additionalInfoItem.classList.add('mb-3');

            additionalInfoItem.append(additionalInfoTitle, additionalInfoValue);
            additionalInfoList.append(additionalInfoItem);
        }

        return additionalInfoList
    }

    toggleMoreInfo(wrapper, btn) {
        const {id, title, doctorType, patientName, parent, ...rest} = this.cardData;

        if (this.visibleMoreInfo) {
            btn.textContent = 'Show details';
            wrapper.previousElementSibling.remove();
            this.visibleMoreInfo = false;
        } else {
            btn.textContent = 'Hide details';
            const list = this.renderMoreInfo(rest);
            wrapper.before(list);
            this.visibleMoreInfo = true;
        }
    }

    render() {
        const {
            self,
            cardBody,
            cardTitle,
            cardSubtitle,
            cardInfo,
            cardControlWrapper,
            deleteCardBtn,
            showMoreBtn,
            editCardBtn
        } = this.elements;

        const {id, title, patientName, doctorType} = this.cardData;

        cardTitle.textContent = title;
        cardSubtitle.textContent = `Patient name: ${patientName}`;
        cardInfo.textContent = `Doctor: ${doctorType}`;

        editCardBtn.textContent = 'Edit visit';
        showMoreBtn.textContent = 'Show details';

        deleteCardBtn.addEventListener('click', () => this.removeVisit(id));
        showMoreBtn.addEventListener('click', () => this.toggleMoreInfo(cardControlWrapper, showMoreBtn));

        cardControlWrapper.append(editCardBtn, deleteCardBtn, showMoreBtn);
        cardBody.append(cardTitle, cardSubtitle, cardInfo, cardControlWrapper);
        self.append(cardBody);

        super.render();
    }
}
