import Component from "./Component.js";
import {modalClasses} from "../utils/configs.js";
import {loginForm} from "./Login.js";
import {visitDoctorForm} from "./Visit.js";

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
            btnSubmit: document.createElement('button'),
        }

        super(elements, classes);
        this.title = title;
        this.actionTitle = actionTitle;
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
            modalBody,
            modalFooter,
            btnClose,
            btnSubmit
        } = this.elements;

        modalTitle.innerText = this.title;
        btnClose.type = 'button';
        btnClose.innerText = "Close";
        btnSubmit.type = 'button';
        btnSubmit.innerText = this.actionTitle;

        const closeControls = [btnClose, crossBtn];
        closeControls.forEach(control => control.addEventListener('click', () => this.closeModal()));
        btnSubmit.addEventListener('click', async () => {
            const response = await this.children.handleLogin();
            if (response) this.closeModal();
        });

        self.append(modalDialog);
        modalDialog.append(modalContent, modalBody);
        modalContent.append(modalHeader, modalBody, modalFooter);
        modalHeader.append(modalTitle, crossBtn);
        modalFooter.append(btnClose, btnSubmit);

        if (!modalBody.hasChildNodes()) {
            modalBody.append(this.children.render());
        }

        super.render()
    }
}

const authModal = new Modal(modalClasses, 'Authorization', 'Login', loginForm);
const createVisit = new Modal(modalClasses, 'Create visit', 'Create', visitDoctorForm);

export {
    authModal,
    createVisit
}
