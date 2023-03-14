import Component from "./Component.js";
import {modalClasses} from "../utils/configs.js";

export default class Modal extends Component {
    constructor(classes, title, actionTitle, children) {
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
            btnSave: document.createElement('button'),
        }

        super(elements, classes);
        this.title = title;
        this.actionTitle = actionTitle;
        this.children = children;
    }

    closeModal() {
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
            modalBody,
            modalFooter,
            btnClose,
            btnSave
        } = this.elements;

        modalTitle.innerText = this.title;
        btnClose.type = 'button';
        btnClose.innerText = "Close";
        btnSave.type = 'button';
        btnSave.innerText = this.actionTitle;

        const closeControls = [btnClose, crossBtn];
        closeControls.forEach(control => control.addEventListener('click', () => this.closeModal()))

        self.append(modalDialog);
        modalDialog.append(modalContent, modalBody);
        modalContent.append(modalHeader, modalBody, modalFooter);
        modalHeader.append(modalTitle, crossBtn);
        modalFooter.append(btnClose, btnSave);

        if (!modalBody.hasChildNodes()) {
            modalBody.append(this.children);
        }

        super.render()
    }
}

const authModal = new Modal(modalClasses, 'Authorization', 'Login', 'Children');
const createVisit = new Modal(modalClasses, 'Create visit', 'Create', 'Children');

export {
    authModal,
    createVisit
}
