const emailLoginConfig = {
    classes: ['form-select'],
    attributes: [
        {
            title: 'id',
            value: 'email'
        },
        {
            title: 'placeholder',
            value: 'Enter your email'
        },
        {
            title: 'type',
            value: 'email'
        }
    ]
}
const passwordLoginConfig = {
    classes: ['form-select'],
    attributes: [
        {
            title: 'id',
            value: 'password'
        },
        {
            title: 'placeholder',
            value: 'Enter your password'
        },
        {
            title: 'type',
            value: 'password'
        },
    ]
}

const visitFormClasses = {
    self: '',
    wrapperName: 'mb-3',
    wrapperPurpose: 'mb-3',
    wrapperDescription: 'mb-4',
    labelForName: 'form-label',
    labelForPurpose: 'form-label',
    labelForDescription: 'form-label',
    patientName: 'form-control',
    visitPurpose: 'form-control',
    visitDescription: 'form-control',
    doctorVariety: 'form-select mb-4',
    visitUrgency: 'form-select mb-3'

}

const homeClasses = {
    parent: "",
    self: "main container mb-5",
    wrapper: "d-flex justify-content-center align-items-center filter-parent",
    statusText: "main__status-text"
}

const headerClasses = {
    parent: "",
    self: "header bg-primary",
    nav: "navbar navbar-light d-flex justify-content-between container",
    logoBox: "navbar-brand header__logo-box",
    logo: "header__logo",
    loginButton: "btn btn-outline-light",
    createVisitButton: "btn btn-outline-light",
}

const modalClasses = {
    parent: "",
    self: "modal fade show",
    modalDialog: "modal-dialog modal-dialog-centered",
    modalContent: "modal-content",
    modalHeader: "modal-header",
    modalTitle: "modal-title fs-5",
    crossBtn: "btn-close",
    modalBody: "modal-body",
    modalFooter: "modal-footer",
    btnClose: "btn btn-secondary",
    btnSubmit: "btn btn-primary",
}

const loginFormClasses = {
    parent: '',
    self: '',
    labelForEmail: 'form-label',
    labelForPassword: 'form-label',
    inputEmail: 'form-control mb-3',
    inputPassword: 'form-control mb-3',
    wrapperEmail: 'mb-3 position-relative',
    wrapperPassword: 'mb-4 position-relative',
    errorBox: 'invalid-feedback invalid-feedback-login'
}

const patientNameConfig = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'fullName'
        },
        {
            title: 'placeholder',
            value: 'Your full name'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

const inputVisitPurpose = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'visitPurpose'
        },
        {
            title: 'placeholder',
            value: 'Visit purpose'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

const inputVisitDescription = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'id',
            value: 'visitDescription'
        },
        {
            title: 'placeholder',
            value: 'Visit description'
        }
    ]
}

const selectDoctorVariety = {
    classes: ['form-select', 'select-doctor'],
    options: [
        {
            value: 'selected',
            title: 'Choose a doctor'
        },
        {
            value: 'cardiologist',
            text: 'Cardiologist'
        },
        {
            value: 'dentist',
            text: 'Dentist'
        },
        {
            value: 'therapist',
            text: 'Therapist'
        }
    ],
    id: 'doctorVariety'
}

export const filterClasses = {
    parent:'',
    self:'',
    labelForFilter:'form-label',
    inputFilter:'form-control',
    parentForFilter:'aaa',
    selectFilter:'form-select',
    secondSelectFilter:'form-select'
}

export const filterConfig = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'id',
            value: 'text'
        },
        {
            title: 'placeholder',
            value: 'Enter what u want search'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

export const selectStatus = {
    classes: ['form-select'],
    options: [
        {
            value: 'selected',
            title: 'Choose a status'
        },
        {
            value: 'done',
            text: 'Done'
        },
        {
            value: 'open',
            text: 'Open'
        },
    ]
}

export const selectPriority = {
    classes: ['form-select'],
    options: [
        {
            value: 'selected',
            title: 'Choose a priority'
        },
        {
            value: 'normal',
            text: 'Normal'
        },
        {
            value: 'low',
            text: 'Low'
        },
        {
            value: 'urgent',
            text: 'Urgent'
        }
    ]
}

const selectUrgencyConfig = {
    classes: ['form-select', 'select-urgency'],
    options: [
        {
            value: 'selected',
            title: 'Choose urgency'
        },
        {
            value: 'normal',
            text: 'Normal'
        },
        {
            value: 'low',
            text: 'Low'
        },
        {
            value: 'urgent',
            text: 'Urgent'
        }
    ],
    id: 'visitUrgency'
}

export {
    emailLoginConfig,
    passwordLoginConfig,
    loginFormClasses,
    visitFormClasses,
    homeClasses,
    headerClasses,
    modalClasses,
    patientNameConfig,
    inputVisitPurpose,
    inputVisitDescription,
    selectDoctorVariety,
    selectUrgencyConfig
}
