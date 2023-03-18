export default class Select {
    constructor({classes, options, attributes}) {
        this.element = document.createElement('select');
        this.classes = classes;
        this.options = options;
        this.attributes = attributes;
    }

    render() {
        this.element.classList.add(...this.classes);
        this.attributes?.forEach(({title, value}) => this.element.setAttribute(title, value));

        const options = this.options.map(({value, text}) => {
            return `<option value="${value}">${text}</option>`
        }).join('');

        this.element.insertAdjacentHTML('afterbegin', `${options}`);
        return this.element
    }
}
