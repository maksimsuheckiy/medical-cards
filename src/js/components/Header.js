import Component from "./Component.js";
import {headerClasses} from "../utils/configs.js";
import {authModal, createVisit} from "./Modal.js";

export default class Header extends Component {
    constructor(classes, handlers) {
        const elements = {
            parent: document.querySelector("#root"),
            self: document.createElement("header"),
            nav: document.createElement("nav"),
            link: document.createElement("a"),
            logo: document.createElement("img"),
            loginButton: document.createElement("button"),
            createVisitButton: document.createElement("button"),
        }

        super(elements, classes);
        this.handlers = handlers;
    }

    render() {
        const {self, nav, link, logo, loginButton, createVisitButton} = this.elements;
        link.href = "#";
        logo.src = "/images/logo.svg";
        logo.alt = "Medical cards";
        loginButton.type = "button";
        loginButton.innerText = "Login";
        createVisitButton.type = "button";
        createVisitButton.innerText = "Create Visit";

        loginButton.addEventListener('click', () => this.handlers.auth());
        createVisitButton.addEventListener('click', () => this.handlers.createVisit());

        self.append(nav);
        nav.append(link);
        link.append(logo);

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

header.render();
