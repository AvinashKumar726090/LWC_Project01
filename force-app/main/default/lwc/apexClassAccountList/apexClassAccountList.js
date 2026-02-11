import { LightningElement, wire, api } from 'lwc';
import getAccountList from '@salesforce/apex/accountClass.getAccountList';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
export default class ApexClassAccountList extends LightningElement {
    @api recordId;
    @wire(getAccountList, { accId: '$recordId' })
    accountLists;

}