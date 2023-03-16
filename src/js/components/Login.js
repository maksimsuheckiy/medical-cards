import Component from "./Component.js";
import Input from "./Input.js";
import API from "../utils/API.js";
import {loginFormClasses, emailLoginConfig, passwordLoginConfig, homeClasses} from "../utils/configs.js";
import {headerClasses} from "../utils/configs.js";
import {emailRegExp} from "../utils/regExp.js";
import Header from "./Header.js";
import Home from "../containers/Home.js";

export default class LoginForm extends Component {
    constructor(classes) {
        const elements = {
            self: document.createElement('form'),
            labelForEmail: document.createElement('label'),
            labelForPassword: document.createElement('label'),
            wrapperEmail: document.createElement('div'),
            wrapperPassword: document.createElement('div'),
            errorBox: document.createElement('span'),
            inputEmail: new Input(emailLoginConfig).render(),
            inputPassword: new Input(passwordLoginConfig).render()
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
        const response = await api.POST(headers, 'login', data);
        const dataResponse = await response.text();

        if (response.status < 200 || response.status > 299) {
            throw new Error(dataResponse)
        } else {
            api.saveToken(dataResponse);
            localStorage.setItem('token', dataResponse);
            return dataResponse
        }
    }

    async handleLogin() {
        const {inputEmail, inputPassword, errorBox} = this.elements;

        const data = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        try {
            if (this.checkCredits(data)) {
                const response = await this.sendRequest(data);
                this.clear(inputEmail, inputPassword, errorBox);
                new Home(homeClasses).render();
                new Header(headerClasses).reRender();
                return response;
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
            labelForEmail,
            labelForPassword,
            inputEmail,
            inputPassword
        } = this.elements;

        labelForEmail.setAttribute('for', 'email');
        labelForPassword.setAttribute('for', 'password');
        labelForEmail.textContent = 'Your email:';
        labelForPassword.textContent = 'Your password:';

        wrapperEmail.append(labelForEmail, inputEmail);
        wrapperPassword.append(labelForPassword, inputPassword);
        self.append(wrapperEmail, wrapperPassword);

        return super.render()
    }
}

export const loginForm = new LoginForm(loginFormClasses);
