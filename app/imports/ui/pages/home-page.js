import { Template } from 'meteor/templating';
import { Contact } from '../../api/contacts/contacts.js';

Template.List_Stuff_Page.helpers({

  contactList() {
    return Contact.find();
  },
});
