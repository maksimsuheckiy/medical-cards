import Select from "./Select.js";
import Input from "./Input.js";
import {
    visitFormClasses,
    inputVisitPurpose,
    inputVisitDescription,
    patientNameConfig,
    selectDoctorVariety,
    selectUrgencyConfig
} from "../utils/configs.js";

export default class Visit {
    constructor(classes) {
        this.elements = {
            self: document.createElement('form'),
            wrapperName: document.createElement('div'),
            wrapperPurpose: document.createElement('div'),
            wrapperDescription: document.createElement('div'),
            labelForName: document.createElement('label'),
            labelForPurpose: document.createElement('label'),
            labelForDescription: document.createElement('label'),
            patientName: new Input(patientNameConfig).render(),
            visitPurpose: new Input(inputVisitPurpose).render(),
            visitDescription: new Input(inputVisitDescription).render(),
            doctorVariety: new Select(selectDoctorVariety).render(),
            visitUrgency: new Select(selectUrgencyConfig).render()
        }

        this.classes = classes;
    }

    chooseDoctorHandle(event) {
        const doctorType = event.target.value;

        if (doctorType !== selectDoctorVariety.options[0].title) {

        }
    }

    render(doctorTypeVisit) {
        const {
            self,
            wrapperName,
            wrapperPurpose,
            wrapperDescription,
            labelForName,
            labelForPurpose,
            labelForDescription,
            patientName,
            visitPurpose,
            visitDescription,
            doctorVariety,
            visitUrgency
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

        doctorVariety.addEventListener('change', event => this.chooseDoctorHandle(event));
        self.append(wrapperName, wrapperPurpose, wrapperDescription, doctorVariety, visitUrgency);

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        return self
    }
}

export const visitDoctor = new Visit(visitFormClasses);
