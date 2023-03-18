import Component from "./Component.js";
import API from "../utils/API.js";
import Home from "../containers/Home.js";
import {homeClasses} from "../utils/configs.js";

export default class Card extends Component {
    constructor(classes, cardData) {
        const elements = {
            parent: document.querySelector('.main__content'),
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
        showMoreBtn.textContent = 'Show more info';

        deleteCardBtn.addEventListener('click', () => this.removeVisit(id));

        cardControlWrapper.append(editCardBtn, deleteCardBtn, showMoreBtn);
        cardBody.append(cardTitle, cardSubtitle, cardInfo, cardControlWrapper);
        self.append(cardBody);

        super.render();
    }
}
