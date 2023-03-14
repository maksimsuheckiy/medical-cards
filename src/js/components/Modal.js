import Component from "./Component.js";
import {modalClasses} from "../utils/configs.js";

export default class Modal extends Component{
    constructor(classes){
        const elements = {
            parent: document.querySelector('#root'),
            self:document.createElement('div'),
            modalDialog: document.createElement('div'),
            modalContent:document.createElement('div'),
            modalHeader:document.createElement('div'),
            modalTitle:document.createElement('h1'),
            crossBtn:document.createElement('button'),
            modalBody:document.createElement('div'),
            modalFooter:document.createElement('div'),
            btnClose:document.createElement('button'),
            btnSave:document.createElement('button'),
            
        }

        super(elements,classes)
    } 
    
    closeModal(){
        const {self} = this.elements;
        self.remove();


    }
    render(){
        const {self,modalDialog,modalContent,modalHeader,modalTitle,crossBtn,modalBody,modalFooter,btnClose,btnSave}= this.elements;
        modalTitle.innerText = "hello";
        btnClose.type = 'button';
        btnClose.innerText = "Close";
        btnSave.type = 'button';
        btnSave.innerText = 'Save';
        const closeControls = [btnClose,crossBtn];
        closeControls.forEach(control=>control.addEventListener('click',()=>this.closeModal()))
         self.append(modalDialog);
        modalDialog.append(modalContent,modalBody);
        modalContent.append(modalHeader,modalBody,modalFooter);
        modalHeader.append(modalTitle,crossBtn);
        // modalBody.append(this.children)
        modalFooter.append(btnClose,btnSave);
        super.render()

        


    }
   
}

// new Modal(modalClasses,'Visit terapist','privet').render();


const modal = new Modal(modalClasses);

modal.render();

