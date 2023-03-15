import Component from "./Component.js";
import {headerClasses} from "../utils/configs.js";
import {authModal, createVisit} from "./Modal.js";

export default class Header extends Component {
    constructor(classes, handlers) {
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
        this.handlers = handlers;
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
        loginButton.addEventListener('click', () => this.handlers.auth());
        createVisitButton.addEventListener('click', () => this.handlers.createVisit());

        self.append(nav);
        logoBox.append(logo);
        nav.append(logoBox);

        if (window.localStorage.getItem("token")) {
            nav.append(createVisitButton);
        } else {
            nav.append(loginButton);
        }

        super.render();
    }
}

const header = new Header(
    headerClasses,
    {
        auth: () => authModal.render(),
        createVisit: () => createVisit.render()
    }
);

header.render()
