import Component from "./Component.js";
import {authModal, createVisitModal} from "./Modal.js";

export default class Header extends Component {
    constructor(classes) {
        const elements = {
            parent: document.querySelector("#root"),
            self: document.createElement("header"),
            nav: document.createElement("nav"),
            logo: document.createElement("img"),
            logoBox: document.createElement('div'),
            loginButton: document.createElement("button"),
            createVisitButton: document.createElement("button"),
        }

        super(elements, classes);
    }

    render() {
        const {self, nav, logo, logoBox, loginButton, createVisitButton} = this.elements;
        logo.src = "/images/logo.svg";
        logo.alt = "Medical cards";
        loginButton.type = "button";
        loginButton.innerText = "Login";
        createVisitButton.type = "button";
        createVisitButton.innerText = "Create Visit";

        logoBox.addEventListener('click', () => location.reload());
        loginButton.addEventListener('click', () => authModal.render());
        createVisitButton.addEventListener('click', () => createVisitModal.render());

        self.append(nav);
        logoBox.append(logo);
        nav.append(logoBox);

        if (localStorage.getItem('token')) {
            nav.append(createVisitButton);
        } else {
            nav.append(loginButton);
        }

        super.render();
    }
}
