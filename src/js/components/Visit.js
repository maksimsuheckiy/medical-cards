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
    inputCloseModal
} from "../utils/configs.js";

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

    isValid() {
        const fields = this.elements.self.elements;
        return Array.from(fields).every(field => field.value.trim() !== '');
    }

    async createVisitHandle(event) {
        event.preventDefault();
        const formElements = this.elements.self.elements;
        const api = new API(process.env.API_URL);
        const headers = api.getHeaders(true);

        const visitData = {
            title: '',
            patientName: '',
            purpose: '',
            description: '',
            doctor: '',
            visitUrgency: ''
        }

        if (this.isValid()) {
            const response = await api.POST(headers, visitData);
            const data = await response.json();

            if (response.status > 200 || response.status < 299) {
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

        labelForName.setAttribute('for', 'fullName');
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
