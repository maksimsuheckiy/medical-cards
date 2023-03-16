import Component from "./Component.js";
import {loginForm} from "./LoginForm.js";
import {visitDoctorForm} from "./Visit.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import {
    modalClasses,
    visitCardiologistClasses,
    visitTherapistClasses,
    visitDentistClasses
} from "../utils/configs.js";

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

    selectedDoctor(doctorType) {
        switch (doctorType) {
            case 'cardiologist':
                const cardiologist = new VisitCardiologist(visitCardiologistClasses);
                break
            case 'dentist':
                const dentist = new VisitDentist(visitDentistClasses);
                break
            case 'therapist':
                const therapist = new VisitTherapist(visitTherapistClasses);
                break
        }
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
