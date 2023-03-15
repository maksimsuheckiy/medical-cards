import Component from "./Component.js";
import Input from "./Input.js";
import Select from './Select.js'
import API from "../utils/API.js";
import { filterClasses,filterConfig,selectStatus,selectPriority } from "../utils/configs.js";


export default class FilterForm extends Component {
    constructor(classes){
        const elements = {
            parent: document.querySelector('.filter-parent'),
            self:document.createElement('form'),
            labelForFilter:document.createElement('label'),
            inputFilter:new Input(filterConfig).render(),
            selectFilter: new Select(selectStatus).render(),
            secondSelectFilter:new Select(selectPriority).render(),
            submitForm:document.createElement('button'),
        }
        super(elements,classes)
    }
    render(){
       const {self,labelForFilter,inputFilter,selectFilter,secondSelectFilter,submitForm} = this.elements;
        labelForFilter.innerText = 'Search';
        submitForm.innerText="Submit";
        
        self.append(labelForFilter,inputFilter,selectFilter,secondSelectFilter,submitForm);
        super.render()

    }
}

const filter = new FilterForm(filterClasses);
filter.render();
