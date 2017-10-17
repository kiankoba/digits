import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.List_Contacts_Page.helpers({
  contactList() {
    return Contacts.find();
  },
});
