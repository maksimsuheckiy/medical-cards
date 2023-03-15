import Visit from "./Visit.js";
import {
    visitFormClasses,
    inputPatientAge,
} from "../utils/configs.js";
import Input from "./Input.js";

export default class VisitTherapist extends Visit {
    constructor(classes) {
        super(classes);

        this.elements = {
            labelForAge: document.createElement('label'),
            inputAge: new Input(inputPatientAge).render()
        }
        this.classes = classes;
    }

    render() {
        return super.render();
    }
}

const visitTherapist = new VisitTherapist(visitFormClasses);
console.log(visitTherapist.render());
