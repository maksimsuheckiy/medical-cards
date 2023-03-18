import Visit from "./Visit.js";
import Input from "./Input.js";
import {
    inputPatientAge,
    inputPatientPressure,
    inputPatientMassIndex,
    inputPatientHeartDisease
} from "../utils/configs.js";

export default class VisitCardiologist extends Visit {
    constructor(classes) {
        super(classes);
        this.CardiologistElements = {
            doctorTitle: document.createElement('h6'),
            inputPatientPressure: new Input(inputPatientPressure).render(),
            inputPatientMassIndex: new Input(inputPatientMassIndex).render(),
            inputPatientHeartDisease: new Input(inputPatientHeartDisease).render(),
            inputPatientAge: new Input(inputPatientAge).render()
        }
    }

    render() {
        const {doctorTitle} = this.CardiologistElements;

        doctorTitle.textContent = 'Additional fields for Cardiologist:'
        doctorTitle.setAttribute('data-type', 'doctor-fields-title');

        for (let prop in this.CardiologistElements) {
            const element = this.CardiologistElements[prop];
            element.className = this.classes[prop];
        }

        return super.render()
    }
}
