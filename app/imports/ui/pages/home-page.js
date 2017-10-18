import { Template } from 'meteor/templating';
import { Contact } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  contactList() {
    return Contact.find();
  },
});
