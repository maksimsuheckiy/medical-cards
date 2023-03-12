import Component from "./Component.js";
import {headerClasses} from "../utils/configs.js";

export default class Header extends Component {
    constructor(classes) {
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

new Header(headerClasses).render();