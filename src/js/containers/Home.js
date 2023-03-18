import Component from "../components/Component.js";
import {cardClasses, headerClasses, homeClasses} from "../utils/configs.js";
import {filterVisits} from "../components/Filter.js";
import Header from "../components/Header.js";
import API from "../utils/API.js";
import Card from "../components/Card.js";

export default class Home extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('#root'),
            self: document.createElement('main'),
            mainInner: document.createElement('div'),
            mainContent: document.createElement('div'),
            statusText: document.createElement('p')
        }

        super(elements, classes);
        this.token = localStorage.getItem('token');
        this.visits = JSON.parse(localStorage.getItem('visits'));
    }

    async renderVisits() {
        const api = new API(process.env.API_URL);
        const headers = api.getHeaders(true);
        const cards = await api.GET(headers);

        localStorage.setItem('visits', JSON.stringify(cards));
        cards.forEach(cardItem => new Card(cardClasses, cardItem).render());
    }

    reRender() {
        const main = document.querySelector('.main');
        const header = document.querySelector('.header');
        [main, header].forEach(element => element.remove());

        this.render()
    }

    render() {
        const {self, mainInner, mainContent, statusText} = this.elements;

        statusText.innerText = 'No items have been added';
        mainInner.append(mainContent);
        self.append(mainInner);

        if (this.visits.length > 0 && this.token !== null) {
            statusText.remove();
        } else {
            mainContent.append(statusText);
        }

        if (this.token !== null) {
            mainInner.prepend(filterVisits.render());
            this.renderVisits();
        }

        super.render();
        new Header(headerClasses).render();
    }
}

new Home(homeClasses).render();
