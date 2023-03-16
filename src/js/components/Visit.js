import Select from "./Select.js";
import Input from "./Input.js";
import {createVisit} from "./Modal.js";
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
            visitUrgency: new Select(selectUrgencyConfig).render()
        }

        this.classes = classes;
    }

    chooseDoctorHandle(event) {
        const doctorType = event.target.value;
        if (doctorType !== selectDoctorVariety.options[0].title) {
            createVisit.selectedDoctor(doctorType);
        }
    }

    render(doctorTypeVisit) {
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
        closeVisitBtn.addEventListener('click', () => createVisit.closeModal())

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        return self
    }
}

export const visitDoctorForm = new Visit(visitFormClasses);
