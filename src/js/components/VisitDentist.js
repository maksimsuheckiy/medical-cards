import Visit from "./Visit.js";
import Input from "./Input.js";
import {inputLastVisit} from "../utils/configs.js";

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

        self.append(lastVisitWrapper, wrapperControl);
        return super.render();
    }
}
