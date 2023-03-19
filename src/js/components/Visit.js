import API from "../utils/API.js";
import Select from "./Select.js";
import Input from "./Input.js";
import {createVisitModal} from "./Modal.js";
import {
    visitFormClasses,
    inputVisitPurpose,
    inputVisitDescription,
    patientNameConfig,
    selectDoctorVariety,
    selectUrgencyConfig,
    inputCreateVisitSubmit,
    inputCloseModal, cardClasses, homeClasses
} from "../utils/configs.js";
import Card from "./Card.js";
import Home from "../containers/Home.js";

export default class Visit {
    constructor(classes) {
        this.elements = {
            self: document.createElement('form'),
            wrapperName: document.createElement('div'),
            wrapperPurpose: document.createElement('div'),
            wrapperDescription: document.createElement('div'),
            wrapperControl: document.createElement('div'),
            labelForName: document.createElement('label'),
            labelForPurpose: document.createElement('label'),
            labelForDescription: document.createElement('label'),
            patientName: new Input(patientNameConfig).render(),
            visitPurpose: new Input(inputVisitPurpose).render(),
            visitDescription: new Input(inputVisitDescription).render(),
            createVisitBtn: new Input(inputCreateVisitSubmit).render(),
            closeVisitBtn: new Input(inputCloseModal).render(),
            doctorVariety: new Select(selectDoctorVariety).render(),
            visitUrgency: new Select(selectUrgencyConfig).render(),
        }

        this.classes = classes;
    }

    chooseDoctorHandle(event) {
        const doctorType = event.target.value;
        if (doctorType !== selectDoctorVariety.options[0].title) {
            createVisitModal.selectedDoctor(doctorType, this.elements.self);
        } else {
            createVisitModal.removeDoctorForm(doctorType);
        }
    }

    isValidData(visitData) {
        return visitData.every(field => field.value.trim() !== '');
    }

    async createVisitHandle(event) {
        event.preventDefault();
        const visitFields = Array.from(this.elements.self.elements);
        const api = new API(process.env.API_URL);
        const headers = api.getHeaders(true);

        if (this.isValidData(visitFields)) {
            const formData = visitFields.map(field => {
                if (!field.classList.contains('btn')) {
                    return {
                        [field.name]: field.value
                    }
                }
            });

            const doctorType = visitFields.find(field => field.name === 'doctorType');
            const singleVisit = Object.assign({}, ...formData);
            singleVisit.title = `Visit to a ${doctorType.value}`;

            const response = await api.POST(headers, singleVisit);

            if (response.status >= 200 && response.status <= 299) {
                const responseData = await response.json();
                new Card(cardClasses, responseData).render();

                const visits = JSON.parse(localStorage.getItem('visits'));
                visits.push(responseData);
                localStorage.setItem('visits', JSON.stringify(visits));

                new Home(homeClasses).reRender();
                createVisitModal.closeModal();
            }
        }
    }

    render() {
        const {
            self,
            wrapperName,
            wrapperPurpose,
            wrapperDescription,
            wrapperControl,
            labelForName,
            labelForPurpose,
            labelForDescription,
            patientName,
            visitPurpose,
            visitDescription,
            doctorVariety,
            visitUrgency,
            createVisitBtn,
            closeVisitBtn
        } = this.elements;

        labelForName.setAttribute('for', 'patientName');
        labelForPurpose.setAttribute('for', 'visitPurpose');
        labelForDescription.setAttribute('for', 'visitDescription');

        labelForName.textContent = 'Your full name:';
        labelForPurpose.textContent = 'Purpose for visit:';
        labelForDescription.textContent = 'Visit description:';

        wrapperName.append(labelForName, patientName);
        wrapperPurpose.append(labelForPurpose, visitPurpose);
        wrapperDescription.append(labelForDescription, visitDescription);
        wrapperControl.append(createVisitBtn, closeVisitBtn);
        self.append(wrapperName, wrapperPurpose, wrapperDescription, doctorVariety, visitUrgency, wrapperControl);

        doctorVariety.addEventListener('change', event => this.chooseDoctorHandle(event));
        closeVisitBtn.addEventListener('click', () => createVisitModal.closeModal());
        createVisitBtn.addEventListener('click', event => this.createVisitHandle(event));

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        return self
    }
}

export const visitDoctorForm = new Visit(visitFormClasses);
