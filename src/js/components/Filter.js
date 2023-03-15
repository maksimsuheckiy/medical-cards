import Component from "./Component.js";
import Input from "./Input.js";
import Select from './Select.js'
import API from "../utils/API.js";
import { filterClasses,filterConfig,selectStatus,selectConfig } from "../utils/configs.js";


export default class FilterForm extends Component {
    constructor(classes){
        const elements = {
            parent: document.querySelector('.filter-parent'),
            self:document.createElement('form'),
            labelForFilter:document.createElement('label'),
            inputFilter:new Input(filterConfig).render(),
            selectStatus: new Select(selectConfig).render()
        }
        super(elements,classes)
    }
    render(){
       const {self,labelForFilter,inputFilter,selectFilter} = this.elements;
        labelForFilter.innerText = 'Критерий для поиска';
        self.append(labelForFilter,inputFilter);

        super.render()

    }
}
 
const filter = new FilterForm(filterClasses);
filter.render();
console.log(filter);