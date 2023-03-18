const emailLoginConfig = {
    classes: ['form-select'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
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
            title: 'required',
            value: ''
        },
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
    self: 'create-visit-form',
    wrapperName: 'mb-3',
    wrapperPurpose: 'mb-3',
    wrapperDescription: 'mb-4',
    wrapperControl: 'd-flex gap-3',
    labelForName: 'form-label',
    labelForPurpose: 'form-label',
    labelForDescription: 'form-label',
    patientName: 'form-control',
    visitPurpose: 'form-control',
    visitDescription: 'form-control',
    doctorVariety: 'form-select mb-4',
    visitUrgency: 'form-select mb-4',
    createVisitBtn: 'create-visit-form__btn btn btn-primary',
    closeVisitBtn: 'create-visit-form__btn btn btn-secondary'
}

const visitTherapistClasses = {
    ...visitFormClasses,
    doctorTitle: 'mb-3',
    inputPatientAge: 'form-control mb-4',
}

const visitCardiologistClasses = {
    ...visitFormClasses,
    doctorTitle: 'mb-3',
    inputPatientPressure: 'form-control mb-3',
    inputPatientMassIndex: 'form-control mb-3',
    inputPatientHeartDisease: 'form-control mb-3',
    inputPatientAge: 'form-control mb-4',
}

const visitDentistClasses = {
    ...visitFormClasses,
    doctorTitle: 'mb-3',
    inputLastVisit: 'form-control mb-4'
}

const inputPatientAge = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'patientAge'
        },
        {
            title: 'placeholder',
            value: 'How old are you'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'data-type',
            value: 'additional-field'
        },
        {
            title: 'name',
            value: 'patientAge'
        }
    ]
}

const inputLastVisit = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'patientLastVisit'
        },
        {
            title: 'placeholder',
            value: 'Your last visit'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'data-type',
            value: 'additional-field'
        },
        {
            title: 'name',
            value: 'patientLastVisit'
        }
    ]
}

const inputPatientPressure = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'patientPressure'
        },
        {
            title: 'placeholder',
            value: 'Your normal pressure'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'data-type',
            value: 'additional-field'
        },
        {
            title: 'name',
            value: 'patientPressure'
        }
    ]
}

const inputPatientMassIndex = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'patientMassIndex'
        },
        {
            title: 'placeholder',
            value: 'Body mass index'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'data-type',
            value: 'additional-field'
        },
        {
            title: 'name',
            value: 'patientMassIndex'
        }
    ]
}

const inputPatientHeartDisease = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'required',
            value: ''
        },
        {
            title: 'id',
            value: 'patientHeartDisease'
        },
        {
            title: 'placeholder',
            value: 'Your heart disease'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'data-type',
            value: 'additional-field'
        },
        {
            title: 'name',
            value: 'patientHeartDisease'
        }
    ]
}

const homeClasses = {
    parent: "",
    self: "main container mb-5",
    wrapper: "main__inner",
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
    modalBody: "modal-body"
}

const loginFormClasses = {
    parent: '',
    self: 'login',
    labelForEmail: 'form-label',
    labelForPassword: 'form-label',
    inputEmail: 'form-control mb-3',
    inputPassword: 'form-control mb-3',
    wrapperEmail: 'mb-3 position-relative',
    wrapperPassword: 'login__wrapper-password position-relative',
    wrapperControl: 'd-flex gap-3',
    errorBox: 'invalid-feedback invalid-feedback-login',
    authBtn: 'btn btn-primary login__btn',
    closeBtn: 'login__btn btn btn-secondary'
}

const inputAuthSubmit = {
    classes: ['btn', 'btn-primary'],
    attributes: [
        {
            title: 'value',
            value: 'Login'
        },
        {
            title: 'type',
            value: 'submit',
        }
    ]
}

const inputCreateVisitSubmit = {
    classes: ['btn', 'btn-primary'],
    attributes: [
        {
            title: 'value',
            value: 'Create visit'
        },
        {
            title: 'type',
            value: 'submit',
        }
    ]
}

const inputCloseModal = {
    classes: ['btn', 'btn-secondary'],
    attributes: [
        {
            title: 'value',
            value: 'Close'
        },
        {
            title: 'type',
            value: 'button',
        }
    ]
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
            value: 'patientName'
        },
        {
            title: 'placeholder',
            value: 'Your full name'
        },
        {
            title: 'type',
            value: 'text'
        },
        {
            title: 'name',
            value: 'patientName'
        }
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
        {
            title: 'name',
            value: 'visitPurpose'
        }
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
        },
        {
            title: 'name',
            value: 'visitDescription'
        }
    ]
}

const selectDoctorVariety = {
    classes: ['form-select', 'select-doctor'],
    options: [
        {
            value: '',
            text: 'Choose a doctor'
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
    attributes: [
        {
            value: 'doctorVariety',
            title: 'id'
        },
        {
            value: '',
            title: 'required'
        },
        {
            value: 'doctorType',
            title: 'name'
        }
    ]
}

const selectUrgencyConfig = {
    classes: ['form-select', 'select-urgency'],
    options: [
        {
            value: '',
            text: 'Choose urgency'
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
    attributes: [
        {
            value: 'visitUrgency',
            title: 'id'
        },
        {
            value: '',
            title: 'required'
        },
        {
            value: 'visitUrgency',
            title: 'name'
        }
    ]
}

const filterClasses = {
    self: 'filter bg-info',
    formTitle: 'mb-4 text-white',
    inputFilter: 'form-control mb-4',
    selectFilter: 'form-select mb-4',
    secondSelectFilter: 'form-select mb-4',
    submitForm: 'btn btn-primary '
}

const inputFilterConfig = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'id',
            value: 'text'
        },
        {
            title: 'placeholder',
            value: 'Search by title or description'
        },
        {
            title: 'type',
            value: 'text'
        },
    ]
}

const selectFilterStatus = {
    classes: ['form-select'],
    options: [
        {
            value: 'selected',
            text: 'Choose a status'
        },
        {
            value: 'done',
            text: 'Done'
        },
        {
            value: 'open',
            text: 'Open'
        }
    ]
}

const selectFilterPriority = {
    classes: ['form-select'],
    options: [
        {
            value: 'selected',
            text: 'Choose a priority'
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

export {
    emailLoginConfig,
    passwordLoginConfig,
    loginFormClasses,
    inputAuthSubmit,
    visitFormClasses,
    homeClasses,
    headerClasses,
    modalClasses,
    filterClasses,
    patientNameConfig,
    inputVisitPurpose,
    inputVisitDescription,
    selectDoctorVariety,
    selectUrgencyConfig,
    inputFilterConfig,
    selectFilterStatus,
    selectFilterPriority,
    visitTherapistClasses,
    visitCardiologistClasses,
    visitDentistClasses,
    inputPatientAge,
    inputLastVisit,
    inputPatientPressure,
    inputPatientMassIndex,
    inputPatientHeartDisease,
    inputCreateVisitSubmit,
    inputCloseModal
}

export const footerClasses = {
    parent: "",
    self: "d-flex flex-wrap justify-content-between align-items-center p-2",
    footerBox: "d-flex justify-content-between align-items-center mt-2",
    footerInner: "d-flex justify-content-between align-items-center border-top container",
    logoFooter: "logo-footer me-3",
    linkFooter: "d-flex align-items-center text-decoration-none text-reset",
    logoText: "fw-semibold",
    footerText: "fw-semibold",
}