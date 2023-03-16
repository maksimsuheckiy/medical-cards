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
        console.log(event.target.value);
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
        self.append(wrapperName, wrapperPurpose, wrapperDescription, doctorVariety, visitUrgency);

        doctorVariety.addEventListener('change', event => this.chooseDoctorHandle(event));

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        return self
    }
}

export const visitDoctorForm = new Visit(visitFormClasses);
