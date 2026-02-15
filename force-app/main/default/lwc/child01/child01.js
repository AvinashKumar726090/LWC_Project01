import { LightningElement, api } from 'lwc';

export default class Child01 extends LightningElement {
    name = 'Child 01';
    @api
    get childName() {
        return this.name;
    }
    set childName(value) {
        this.name = value.toUpperCase();
    }

}