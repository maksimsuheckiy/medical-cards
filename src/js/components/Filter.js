import Component from "./Component.js";
import Input from "./Input.js";
import Select from './Select.js'
import {
    filterClasses,
    inputFilterConfig,
    selectFilterPriority,
    selectFilterStatus
} from "../utils/configs.js";

export default class FilterForm extends Component {
    constructor(classes) {
        const elements = {
            self: document.createElement('form'),
            formTitle: document.createElement('h5'),
            inputFilter: new Input(inputFilterConfig).render(),
            selectFilter: new Select(selectFilterStatus).render(),
            secondSelectFilter: new Select(selectFilterPriority).render(),
            submitForm: document.createElement('button')
        }

        super(elements, classes)
    }

    render() {
        const {self, formTitle, inputFilter, selectFilter, secondSelectFilter, submitForm} = this.elements;
        submitForm.textContent = "Submit";
        formTitle.textContent = 'Visits filter:'

        self.append(formTitle, inputFilter, selectFilter, secondSelectFilter, submitForm);
        return super.render()
    }
}

export const filterVisits = new FilterForm(filterClasses);
