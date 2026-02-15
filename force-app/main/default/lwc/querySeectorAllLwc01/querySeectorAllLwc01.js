import { LightningElement } from 'lwc';

export default class QuerySeectorAllLwc01 extends LightningElement {
    firstNamme = '';
    lastName = '';
    message = '';

    handleChange(event) {
        const fieldName = event.target.name;

        if (fieldName === 'fName') {
            this.firstNamme = event.target.value;
        } else if (fieldName === 'lName') {
            this.lastName = event.target.value;
        }
    }

    handleClick() {
        this.message = `Hi ${this.firstNamme} ${this.lastName}`;
    }
}