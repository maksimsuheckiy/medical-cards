export default class Input {
    constructor(classes, attributes) {
        this.element = document.createElement('input');
        this.classes = classes;
        this.attributes = attributes;
    }

    render() {
        this.element.classList.add(...this.classes);
        this.attributes.forEach(({title, value}) => this.element.setAttribute(title, value));
        return this.element
    }
}

