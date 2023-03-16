import Visit from "./Visit.js";
import {
    visitDentistClasses,
    inputLastVisit
} from "../utils/configs.js";
import Input from "./Input.js";

export default class VisitDentist extends Visit {
    constructor(classes) {
        super();

        this.DentistElements = {
            lastVisitWrapper: document.createElement('div'),
            labelForLastVisit: document.createElement('label'),
            inputLastVisit: new Input(inputLastVisit).render()
        }
        this.classes = classes;
    }

    render() {
        const {self, wrapperControl} = this.elements;
        const {lastVisitWrapper, labelForLastVisit, inputLastVisit} = this.DentistElements;

        for (let prop in this.DentistElements) {
            const element = this.DentistElements[prop];
            element.className = this.classes[prop];
        }

        labelForLastVisit.setAttribute('for', 'patientLastVisit');
        lastVisitWrapper.append(labelForLastVisit, inputLastVisit);

        super.render();
        self.append(lastVisitWrapper, wrapperControl);
        return self
    }
}

export const visitDentistForm = new VisitDentist(visitDentistClasses);
visitDentistForm.render()
