import Component from "./Component.js";
import {loginForm} from "./LoginForm.js";
import {createVisitDoctorForm} from "./Visit.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import {modalClasses, visitCardiologistClasses, visitDentistClasses, visitTherapistClasses} from "../utils/configs.js";

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

    removeDoctorForm() {
        const doctorFieldsTitle = document.querySelector('[data-type="doctor-fields-title"]');
        const additionalFields = document.querySelectorAll('[data-type="additional-field"]');
        additionalFields.forEach(field => field.remove());
        doctorFieldsTitle?.remove();
    }

    static closeModal() {
        const modal = document.querySelector('#modal');
        const doctorFieldsTitle = modal.querySelector('[data-type="doctor-fields-title"]');
        const additionalFields = modal.querySelectorAll('[data-type="additional-field"]');
        const innerForm = modal?.querySelector('form');
        const errors = modal?.querySelectorAll('.invalid-feedback');
        errors?.forEach(error => error.remove());
        innerForm?.reset();
        modal?.remove();
        additionalFields.forEach(field => field.remove());
        doctorFieldsTitle?.remove();
    }

    renderDoctorForm(doctorFields, childVisitElements, childVisitClasses, parentVisitForm, initialData) {
        const visitControl = parentVisitForm.lastChild;

        doctorFields.render();
        this.removeDoctorForm();

        for (let prop in childVisitElements) {
            const element = childVisitElements[prop];

            if (initialData) {
                element.value = initialData[element.name];
            }

            element.className = childVisitClasses[prop];
            visitControl.before(element);
        }
    }

    selectedDoctor(doctorType, parentVisitForm, initialData) {
        switch (doctorType) {
            case 'cardiologist':
                const cardiologist = new VisitCardiologist(visitCardiologistClasses);
                this.renderDoctorForm(
                    cardiologist,
                    cardiologist.CardiologistElements,
                    cardiologist.classes,
                    parentVisitForm,
                    initialData
                );
                break
            case 'dentist':
                const dentist = new VisitDentist(visitDentistClasses);
                this.renderDoctorForm(
                    dentist,
                    dentist.DentistElements,
                    dentist.classes,
                    parentVisitForm,
                    initialData
                );
                break
            case 'therapist':
                const therapist = new VisitTherapist(visitTherapistClasses);
                this.renderDoctorForm(
                    therapist,
                    therapist.TherapistElements,
                    therapist.classes,
                    parentVisitForm,
                    initialData
                );
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
        self.setAttribute('id', "modal");

        crossBtn.addEventListener('click', () => Modal.closeModal());

        self.addEventListener('click', (event) => {
            if (event.target.id === "modal") {
                const errors = document.querySelectorAll('.invalid-feedback');
                errors?.forEach(error => error.remove());
                this.elements.self.remove();
            }
        })

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
const createVisitModal = new Modal(modalClasses, 'Create visit', createVisitDoctorForm);

export {
    authModal,
    createVisitModal
}
