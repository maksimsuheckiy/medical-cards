import Visit from "./Visit.js";
import Input from "./Input.js";
import {inputPatientAge} from "../utils/configs.js";

export default class VisitTherapist extends Visit {
    constructor(classes) {
        super(classes);
        this.TherapistElements = {
            doctorTitle: document.createElement('h6'),
            inputPatientAge: new Input(inputPatientAge).render()
        }
    }

    render() {
        const {doctorTitle} = this.TherapistElements;

        doctorTitle.textContent = 'Additional field for Therapist (your age):';
        doctorTitle.setAttribute('data-type', 'doctor-fields-title');

        for (let prop in this.TherapistElements) {
            const element = this.TherapistElements[prop];
            element.className = this.classes[prop];
        }

        return super.render();
    }
}
