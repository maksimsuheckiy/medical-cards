export default class Select {
    constructor(classes, options, id) {
        this.element = document.createElement('select');
        this.classes = classes;
        this.options = options;
        this.id = id;
    }

    render() {
        if (this.id) this.element.setAttribute('id', this.id);
        this.element.classList.add(...this.classes);

        const options = this.options.map(({value, title, text}) => {
            if (value === 'selected') {
                return `<option ${value}>${title}</option>`
            } else {
                return `<option value="${value}">${text}</option>`
            }
        }).join('');

        this.element.insertAdjacentHTML('afterbegin', `${options}`);
        return this.element
    }
}
