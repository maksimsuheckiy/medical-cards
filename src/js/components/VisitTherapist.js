import Visit from "./Visit.js";
import Input from "./Input.js";
import {
    inputPatientAge,
    visitTherapistClasses,
} from "../utils/configs.js";

export default class VisitTherapist extends Visit {
    constructor(classes) {
        super();

        this.TherapistElements = {
            patientAgeWrapper: document.createElement('div'),
            labelForAge: document.createElement('label'),
            inputPatientAge: new Input(inputPatientAge).render()
        }
        this.classes = classes;
    }

    render() {
        const {self} = this.elements;
        const {patientAgeWrapper, labelForAge, inputPatientAge} = this.TherapistElements;

        for (let prop in this.TherapistElements) {
            const element = this.TherapistElements[prop];
            element.className = this.classes[prop];
        }

        labelForAge.setAttribute('for', 'patientAge');
        patientAgeWrapper.append(labelForAge, inputPatientAge);

        super.render();
        self.append(patientAgeWrapper);
        return self
    }
}

export const visitTherapistForm = new VisitTherapist(visitTherapistClasses);
visitTherapistForm.render()
