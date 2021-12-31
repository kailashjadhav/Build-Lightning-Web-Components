import { LightningElement, api, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import getRelatedContacts from '@salesforce/apex/AccountController2.getRelatedContacts';

const COLUMNS = [
    { label: 'Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Title', fieldName: TITLE_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' },
    { label: 'Phone', fieldName: PHONE_FIELD.fieldApiName, type: 'text' },

];
export default class WireApexProperty extends LightningElement {
    columns = COLUMNS;
    @api recordId;
    @wire(getRelatedContacts, { accountId: '$recordId' })
    contacts;
}