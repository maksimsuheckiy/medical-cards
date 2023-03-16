import Component from "../components/Component.js";
import {homeClasses} from "../utils/configs.js";
import {filterVisits} from "../components/Filter.js";
import {headerClasses} from "../utils/configs.js";
import Header from "../components/Header.js";

export default class Home extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('#root'),
            self: document.createElement('main'),
            wrapper: document.createElement('div'),
            statusText: document.createElement('p')
        }

        super(elements, classes);
    }

    reRender() {
        this.render();
    }

    render() {
        const {self, wrapper, statusText} = this.elements;

        statusText.innerText = 'No items have been added';
        wrapper.append(statusText);
        self.append(wrapper);

        if (localStorage.getItem('token')) {
            wrapper.prepend(filterVisits.render());
        }

        super.render();
        new Header(headerClasses).render();
    }
}

new Home(homeClasses).render();
