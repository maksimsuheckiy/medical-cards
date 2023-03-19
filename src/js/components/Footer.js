import Component from "./Component.js";
import {footerClasses} from "../utils/configs.js";

export default class Footer {
    constructor(classes) {
        this.classes = classes;
        this.elements = {   
            parent: document.querySelector("#root"),
            self: document.createElement("footer"),
            footerInner: document.createElement("div"),
            footerBox: document.createElement("div"),
            linkFooter: document.createElement("a"),
            logoFooter: document.createElement("img"),
            logoText: document.createElement("span"),
            footerText: document.createElement("span"),
        }

    }

    render() {
        const {parent, self, footerInner, footerBox, linkFooter, logoFooter, logoText, footerText} = this.elements;
        linkFooter.href = "#";
        logoFooter.src = "/images/logo.svg";
        logoFooter.alt = "Medical cards";
        logoText.innerText = "Medical Clinic";
        footerText.innerText = "© 2023 Company, Inc";

        for (let prop in this.elements) {
            const element = this.elements[prop];
            element.className = this.classes[prop];
        }

        // logoFooter.setAttribute("logo-footer");
        parent.append(self);
        self.append(footerInner);
        footerInner.append(footerBox, footerText);
        footerBox.append(linkFooter);
        linkFooter.append(logoFooter, logoText);

    }
}

new Footer(footerClasses).render();