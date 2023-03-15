import Component from "../components/Component.js";
import {homeClasses} from "../utils/configs.js";
export default class Home extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector('#root'),
            self: document.createElement('main'),
            wrapper: document.createElement('div'),
            statusText: document.createElement('p')
        }

        super(elements, classes)
    }

    render() {
        const {self, wrapper, statusText} = this.elements;

        statusText.innerText = 'No items have been added';
        wrapper.append(statusText);
        self.append(wrapper);

        super.render();
    }
}

new Home(homeClasses).render()
