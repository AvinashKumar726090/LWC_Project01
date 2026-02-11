import { LightningElement } from 'lwc';

export default class DataBinding01 extends LightningElement {
    name = "Write your name"
    handleChange(event) {
        this.name = event.target.value;
    }
    firstName = "";
    lastName = "";
    handleChange01(event) {
        if (event.target.label === 'Enter First Name') {
            this.firstName = event.target.value;
        } else if (event.target.label === 'Enter Last Name') {
            this.lastName = event.target.value;
        }
    }
    get FullName() {
        return (this.firstName + ' ' + this.lastName).toUpperCase();
    }
    message = "Hii";
    handleClick() {
        const inputField = this.template.querySelector('[data-id="newId"]');
        this.message = inputField.value;
    }
}