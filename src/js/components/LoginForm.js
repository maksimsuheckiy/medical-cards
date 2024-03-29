import Component from "./Component.js";
import Input from "./Input.js";
import API from "../utils/API.js";
import Home from "../containers/Home.js";
import Modal from "./Modal.js";
import {emailRegExp} from "../utils/regExp.js";
import {
    loginFormClasses,
    emailLoginConfig,
    passwordLoginConfig,
    homeClasses,
    inputAuthSubmit,
    inputCloseModal
} from "../utils/configs.js";

export default class LoginForm extends Component {
    constructor(classes) {
        const elements = {
            self: document.createElement('form'),
            labelForEmail: document.createElement('label'),
            labelForPassword: document.createElement('label'),
            wrapperEmail: document.createElement('div'),
            wrapperPassword: document.createElement('div'),
            wrapperControl: document.createElement('div'),
            errorBox: document.createElement('span'),
            inputEmail: new Input(emailLoginConfig).render(),
            inputPassword: new Input(passwordLoginConfig).render(),
            authBtn: new Input(inputAuthSubmit).render(),
            closeBtn: new Input(inputCloseModal).render()
        }

        super(elements, classes)
    }

    clear(email, password, error) {
        email.value = '';
        password.value = '';
        error.remove();
    }

    checkCredits({email, password}) {
        const isValidEmail = emailRegExp.test(String(email).toLowerCase());
        const isValidPassword = password.length > 4;

        return !(!isValidEmail || !isValidPassword);
    }

    async sendRequest(data) {
        const api = new API(process.env.API_URL);
        const headers = api.getHeaders(true);
        const response = await api.POST(headers, data, 'login');
        const dataResponse = await response.text();

        if (response.status < 200 || response.status > 299) {
            throw new Error(dataResponse)
        } else {
            api.saveToken(dataResponse);
            localStorage.setItem('token', dataResponse);
            return dataResponse
        }
    }

    async handleLogin(event) {
        event.preventDefault();
        const {inputEmail, inputPassword, errorBox} = this.elements;

        const data = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        try {
            if (this.checkCredits(data)) {
                await this.sendRequest(data);
                this.clear(inputEmail, inputPassword, errorBox);
                Modal.closeModal();
                new Home(homeClasses).reRender();
            } else {
                throw new Error('Invalid email or password less then 4 characters');
            }
        } catch (error) {
            errorBox.textContent = error.message;
            errorBox.classList.add('invalid-feedback-auth', 'invalid-feedback-auth--active')
            inputPassword.after(errorBox);
        }
    }

    render() {
        const {
            self,
            wrapperEmail,
            wrapperPassword,
            wrapperControl,
            labelForEmail,
            labelForPassword,
            inputEmail,
            inputPassword,
            authBtn,
            closeBtn
        } = this.elements;

        labelForEmail.setAttribute('for', 'email');
        labelForPassword.setAttribute('for', 'password');
        labelForEmail.textContent = 'Your email:';
        labelForPassword.textContent = 'Your password:';

        wrapperEmail.append(labelForEmail, inputEmail);
        wrapperPassword.append(labelForPassword, inputPassword);
        wrapperControl.append(authBtn, closeBtn);
        self.append(wrapperEmail, wrapperPassword, wrapperControl);

        authBtn.addEventListener('click', event => this.handleLogin(event));
        closeBtn.addEventListener('click', () => Modal.closeModal());

        return super.render()
    }
}

export const loginForm = new LoginForm(loginFormClasses);
