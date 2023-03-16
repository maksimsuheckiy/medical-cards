import Visit from "./Visit.js";
import {
    visitCardiologistClasses,
    inputPatientAge,
    inputPatientPressure,
    inputPatientMassIndex,
    inputPatientHeartDisease
} from "../utils/configs.js";
import Input from "./Input.js";

export default class VisitCardiologist extends Visit {
    constructor(classes) {
        super();

        this.CardiologistElements = {
            patientPressureWrapper: document.createElement('div'),
            patientMassIndexWrapper: document.createElement('div'),
            heartDiseaseWrapper: document.createElement('div'),
            patientAgeWrapper: document.createElement('div'),
            patientPressureLabel: document.createElement('label'),
            patientMassIndexLabel: document.createElement('label'),
            heartDiseaseLabel: document.createElement('label'),
            labelForAge: document.createElement('label'),
            inputPatientPressure: new Input(inputPatientPressure).render(),
            inputPatientMassIndex: new Input(inputPatientMassIndex).render(),
            inputPatientHeartDisease: new Input(inputPatientHeartDisease).render(),
            inputPatientAge: new Input(inputPatientAge).render()

        }
        this.classes = classes;
    }

    render() {
        const {self} = this.elements;
        const {
            patientPressureWrapper,
            patientMassIndexWrapper,
            heartDiseaseWrapper,
            patientAgeWrapper,
            patientPressureLabel,
            patientMassIndexLabel,
            heartDiseaseLabel,
            labelForAge,
            inputPatientPressure,
            inputPatientMassIndex,
            inputPatientHeartDisease,
            inputPatientAge
        } = this.CardiologistElements;

        patientPressureLabel.setAttribute('for', 'patientPressure');
        patientMassIndexLabel.setAttribute('for', 'patientMassIndex');
        heartDiseaseLabel.setAttribute('for', 'patientHeartDisease');
        labelForAge.setAttribute('for', 'patientAge');

        patientPressureWrapper.append(patientPressureLabel, inputPatientPressure);
        patientMassIndexWrapper.append(patientMassIndexLabel, inputPatientMassIndex);
        heartDiseaseWrapper.append(heartDiseaseLabel, inputPatientHeartDisease);
        patientAgeWrapper.append(labelForAge, inputPatientAge);

        for (let prop in this.CardiologistElements) {
            const element = this.CardiologistElements[prop];
            element.className = this.classes[prop];
        }

        super.render();
        self.append(patientPressureWrapper, patientMassIndexWrapper, heartDiseaseWrapper, patientAgeWrapper);
        return self
    }
}

export const visitCardiologistForm = new VisitCardiologist(visitCardiologistClasses);
visitCardiologistForm.render();
