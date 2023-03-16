import Component from "./Component.js";
import {modalClasses} from "../utils/configs.js";
import {loginForm} from "./LoginForm.js";
import {visitDoctorForm} from "./Visit.js";

export default class Modal extends Component {
    constructor(classes, title, children) {
        const elements = {
            parent: document.querySelector('#root'),
            self: document.createElement('div'),
            modalDialog: document.createElement('div'),
            modalContent: document.createElement('div'),
            modalHeader: document.createElement('div'),
            modalTitle: document.createElement('h1'),
            crossBtn: document.createElement('button'),
            modalBody: document.createElement('div'),
            modalFooter: document.createElement('div'),
            btnClose: document.createElement('button'),
            btnSubmit: document.createElement('button')
        }

        super(elements, classes);
        this.title = title;
        this.children = children;
    }

    closeModal() {
        const {errorBox} = this.children.elements;
        errorBox?.remove();
        this.elements.self.remove();
    }

    render() {
        const {
            self,
            modalDialog,
            modalContent,
            modalHeader,
            modalTitle,
            crossBtn,
            modalBody
        } = this.elements;

        modalTitle.innerText = this.title;

        crossBtn.addEventListener('click', () => this.closeModal())

        self.append(modalDialog);
        modalDialog.append(modalContent, modalBody);
        modalContent.append(modalHeader, modalBody);
        modalHeader.append(modalTitle, crossBtn);

        if (!modalBody.hasChildNodes()) {
            modalBody.append(this.children.render());
        }

        super.render()
    }
}

const authModal = new Modal(modalClasses, 'Authorization', loginForm);
const createVisit = new Modal(modalClasses, 'Create visit', visitDoctorForm);

export {
    authModal,
    createVisit
}
