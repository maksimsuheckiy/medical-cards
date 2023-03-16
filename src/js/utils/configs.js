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
    closeVisitBtn: 'create-visit-form__btn btn btn-secondary    '
}

const visitTherapistClasses = {
    ...visitFormClasses,
    patientAgeWrapper: 'mb-3',
    labelForAge: 'form-label mb-3',
    inputPatientAge: 'form-control mb-3',
}

const visitCardiologistClasses = {
    ...visitFormClasses,
    patientPressureWrapper: 'mb-3',
    patientMassIndexWrapper: 'mb-3',
    heartDiseaseWrapper: 'mb-3',
    patientAgeWrapper: 'mb-3',
    patientPressureLabel: 'form-label mb-3',
    patientMassIndexLabel: 'form-label mb-3',
    heartDiseaseLabel: 'form-label mb-3',
    labelForAge: 'form-label mb-3',
    inputPatientPressure: 'form-control mb-3',
    inputPatientMassIndex: 'form-control mb-3',
    inputPatientHeartDisease: 'form-control mb-3',
    inputPatientAge: 'form-control mb-3',
}

const visitDentistClasses = {
    ...visitFormClasses,
    lastVisitWrapper: 'mb-3',
    labelForLastVisit: 'form-label mb-3',
    inputLastVisit: 'form-control mb-3'
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
            value: 'your age'
        },
        {
            title: 'type',
            value: 'text'
        },
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
            value: 'Your normal pressure'
        },
        {
            title: 'type',
            value: 'text'
        },
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
    errorBox: 'invalid-feedback invalid-feedback-login',
    authBtn: 'btn btn-primary login__btn'
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

const inputCloseVisitBtn = {
    classes: ['btn', 'btn-danger'],
    attributes: [
        {
            title: 'value',
            value: 'Close visit'
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
            value: 'fullName'
        },
        {
            title: 'placeholder',
            value: 'Your full name'
        },
        {
            title: 'type',
            value: 'text'
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

const selectFilterPriority = {
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
    inputCloseVisitBtn
}
