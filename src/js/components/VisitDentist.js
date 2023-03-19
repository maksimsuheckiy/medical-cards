import Visit from "./Visit.js";
import Input from "./Input.js";
import {inputLastVisit} from "../utils/configs.js";

export default class VisitDentist extends Visit {
    constructor(classes) {
        super(classes);
        this.DentistElements = {
            doctorTitle: document.createElement('h6'),
            inputLastVisit: new Input(inputLastVisit).render()
        }
    }

    render() {
        const {doctorTitle} = this.DentistElements;

        doctorTitle.textContent = 'Additional field for Dentist (last visit):';
        doctorTitle.setAttribute('data-type', 'doctor-fields-title');

        for (let prop in this.DentistElements) {
            const element = this.DentistElements[prop];
            element.className = this.classes[prop];
        }

        return super.render();
    }
}
