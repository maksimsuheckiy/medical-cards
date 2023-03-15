export const emailLoginConfig = {
    classes: ['form-control'],
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

export const passwordLoginConfig = {
    classes: ['form-control'],
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

export const loginFormClasses = {
    parent: '',
    self: '',
    labelForEmail: 'form-label',
    labelForPassword: 'form-label',
    inputEmail: 'form-control mb-3',
    inputPassword: 'form-control mb-3',
    wrapperEmail: 'mb-3 position-relative',
    wrapperPassword: 'mb-4 position-relative',
    errorBox: 'invalid-feedback invalid-feedback-login',

}

export const homeClasses = {
    parent: "",
    self: "main container mb-5",
    wrapper: "d-flex justify-content-center align-items-center filter-parent",
    statusText: "main__status-text"
}

export const headerClasses = {
    parent: "",
    self: "header bg-primary",
    nav: "navbar navbar-light d-flex justify-content-between container",
    logoBox: "navbar-brand header__logo-box",
    logo: "header__logo",
    loginButton: "btn btn-outline-light",
    createVisitButton: "btn btn-outline-light",
}

export const modalClasses = {
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

export const filterClasses = {
    parent:'',
    self:'',
    labelForFilter:'form-label',
    inputFilter:'form-control',
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

export const selectConfig = {
    classes: ['form-control'],
    attributes: [
        {
            title: 'id',
            value: 'select'
        },
        {
            title: 'type',
            value: 'select'
        },
    ]
}

export const selectStatus = {    classes: ['form-select', 'select-status'],
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

export const selectPriority = {    classes: ['form-select', 'select-priority'],
    options: [
        {
            value: 'selected',
            title: 'Choose a priority'
        },
        {
            value: 'high',
            text: 'High'
        },
        {
            value: 'normal',
            text: 'Normal'
        },
        {
            value: 'low',
            text: 'Low'
        }
    ]
}