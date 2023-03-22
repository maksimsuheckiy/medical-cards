import Component from "./Component.js";
import Input from "./Input.js";
import Select from './Select.js'
import {
    cardClasses,
    filterClasses, homeClasses,
    inputFilterConfig,
    selectFilterPriority,
    selectFilterStatus
} from "../utils/configs.js";
import Card from "./Card.js";
import Home from "../containers/Home.js";

export default class FilterForm extends Component {
    filter = {
        name: '',
        doctor: '',
        urgency: ''
    }

    filteredCards = [];

    constructor(classes) {
        const elements = {
            self: document.createElement('form'),
            formTitle: document.createElement('h5'),
            inputFilter: new Input(inputFilterConfig).render(),
            doctorSelect: new Select(selectFilterStatus).render(),
            urgencySelect: new Select(selectFilterPriority).render(),
            submitForm: document.createElement('button')
        }

        super(elements, classes);
        this.visits = JSON.parse(localStorage.getItem('visits'));
    }

    clearVisits() {
        const visitsContainer = document.querySelector('.main__content');
        while (visitsContainer.firstChild) {
            visitsContainer.removeChild(visitsContainer.firstChild);
        }
    }

    resetForm(event) {
        event.preventDefault();
        this.clearVisits();
        this.elements.self.reset();
    }

    filterByName(item) {
        if (this.filter.name !== '') {
            return item.patientName
                .toLowerCase()
                .includes(this.filter.name.toLowerCase())
        } else {
            return true
        }

    }

    filterByDoctor(item) {
        if (this.filter.doctor !== '') {
            return item.doctorType === this.filter.doctor
        } else {
            return true
        }
    }

    filterByUrgency(item) {
        if (this.filter.urgency !== '') {
            return item.visitUrgency === this.filter.urgency
        } else {
            return true
        }
    }

    showCards() {
        if (this.filteredCards.length === 0) {
            const container = document.querySelector('.main__content');
            const message = document.createElement('p');
            message.classList.add('main__status-text');
            message.textContent = 'No matches';
            container.append(message);
        } else {
            this.filteredCards.forEach(card => new Card(cardClasses, card).render());
        }
    }

    filterData() {
        const allCards = this.visits;
        this.filteredCards = allCards
            .filter(item => {
                if (this.filterByName(item) === true) return item
            })

            .filter(item => {
                if (this.filterByDoctor(item) === true) return item
            })

            .filter(item => {
                if (this.filterByUrgency(item) === true) return item
            })

        this.clearVisits();
        this.showCards();
    }

    render() {
        const {self, formTitle, inputFilter, doctorSelect, urgencySelect, submitForm} = this.elements;
        submitForm.textContent = "Reset";
        formTitle.textContent = 'Visits filter:'

        inputFilter.addEventListener('input', event => {
            this.filter.name = event.target.value
            this.filterData()
        });

        doctorSelect.addEventListener('change', event => {
            this.filter.doctor = event.target.value
            this.filterData()
        });

        urgencySelect.addEventListener('change', event => {
            this.filter.urgency = event.target.value
            this.filterData()
        });

        submitForm.addEventListener('click', event => this.resetForm(event));

        self.append(formTitle, inputFilter, doctorSelect, urgencySelect, submitForm);
        return super.render()
    }
}

export const filterVisits = new FilterForm(filterClasses);
