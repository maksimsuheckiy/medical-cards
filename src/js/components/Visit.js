import API from "../utils/API.js";
import Select from "./Select.js";
import Input from "./Input.js";
import Card from "./Card.js";
import Home from "../containers/Home.js";
import Modal from "./Modal.js";
import {createVisitModal} from "./Modal.js";
import {
    visitFormClasses,
    inputVisitPurpose,
    inputVisitDescription,
    patientNameConfig,
    selectDoctorVariety,
    selectUrgencyConfig,
    inputCreateVisitSubmit,
    inputEditVisitSubmit,
    inputCloseModal,
    cardClasses,
    homeClasses
} from "../utils/configs.js";

export default class Visit {
    changedVisit = false;

    constructor(classes, action, initialData) {
        this.classes = classes;
        this.action = action;
        this.initialData = initialData;
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
            submitBtn: new Input(
                this.action === 'create' ?
                    inputCreateVisitSubmit :
                    inputEditVisitSubmit
            ).render(),
            closeVisitBtn: new Input(inputCloseModal).render(),
            doctorVariety: new Select(selectDoctorVariety).render(),
            visitUrgency: new Select(selectUrgencyConfig).render(),
        }
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

    async createVisitHandler(event) {
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
                Modal.closeModal();
            }
        }
    }

    async updateVisitHandler(event) {
        event.preventDefault();
        const visitFields = Array.from(this.elements.self.elements)

        if (this.changedVisit && this.isValidData(visitFields)) {
            const formData = visitFields.map(field => {
                if (!field.classList.contains('btn')) {
                    return {
                        [field.name]: field.value
                    }
                }
            });

            const doctorType = visitFields.find(field => field.name === 'doctorType');
            const updatedVisit = Object.assign({}, ...formData);
            updatedVisit.title = `Visit to a ${doctorType.value}`;
            updatedVisit.id = this.initialData.id;

            const api = new API(process.env.API_URL);
            const headers = api.getHeaders(true);
            const response = await api.PUT(headers, this.initialData.id, updatedVisit);

            if (response.status >= 200 && response.status <= 299) {
                const responseData = await response.json();

                const visits = JSON.parse(localStorage.getItem('visits'));
                const updatedVisits = visits.map(visit => {
                    if (visit.id === responseData.id) {
                        return responseData
                    }

                    return visit
                });

                localStorage.setItem('visits', JSON.stringify(updatedVisits));

                new Home(homeClasses).reRender();
                Modal.closeModal();
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
            submitBtn,
            closeVisitBtn
        } = this.elements;

        labelForName.setAttribute('for', 'patientName');
        labelForPurpose.setAttribute('for', 'visitPurpose');
        labelForDescription.setAttribute('for', 'visitDescription');

        labelForName.textContent = 'Your full name:';
        labelForPurpose.textContent = 'Purpose for visit:';
        labelForDescription.textContent = 'Visit description:';

        if (this.action === 'edit') {
            const {
                doctorType,
                patientName: currentPatientName,
                visitPurpose: currentVisitPurpose,
                visitDescription: currentVisitDescription,
                visitUrgency: currentVisitUrgency
            } = this.initialData;

            const additionalFields = new Promise(resolve => {
                setTimeout(() => {
                    const additionalFields = Array.from(self.elements).filter(element => {
                        if (element.hasAttribute('data-type')) {
                            return element
                        }
                    });

                    resolve(additionalFields);
                }, 0);
            });

            additionalFields.then(currentDoctorFields => {
                [patientName, visitPurpose, visitDescription, ...currentDoctorFields].forEach(field => {
                    field.addEventListener('input', event => {
                        if (event.target.value) this.changedVisit = true
                    });
                })
            })

            patientName.value = currentPatientName;
            visitPurpose.value = currentVisitPurpose;
            visitDescription.value = currentVisitDescription;

            Array.from(doctorVariety.children).forEach(option => {
                if (option.value === doctorType) {
                    option.setAttribute('selected', true);
                }
            });

            Array.from(visitUrgency.children).forEach(option => {
                if (option.value === currentVisitUrgency) {
                    option.setAttribute('selected', true);
                }
            });

            [doctorVariety, visitUrgency].forEach(field => {
                field.setAttribute('disabled', '');
            });
        }

        wrapperName.append(labelForName, patientName);
        wrapperPurpose.append(labelForPurpose, visitPurpose);
        wrapperDescription.append(labelForDescription, visitDescription);
        wrapperControl.append(submitBtn, closeVisitBtn);
        self.append(wrapperName, wrapperPurpose, wrapperDescription, doctorVariety, visitUrgency, wrapperControl);

        doctorVariety.addEventListener('change', event => this.chooseDoctorHandle(event));
        closeVisitBtn.addEventListener('click', () => Modal.closeModal());

        submitBtn.addEventListener('click', event => {
            if (this.action === 'edit') {
                this.updateVisitHandler(event)
            } else {
                this.createVisitHandler(event)
            }
        });

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        return self
    }
}

export const createVisitDoctorForm = new Visit(visitFormClasses, 'create');
