import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Contact, ContactSchema } from '../../api/contacts/contacts.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Add_Contact_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  const createContext = ContactSchema.namedContext('Add_Contact_Page');
  this.context = createContext;
});

Template.Add_Contact_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});


Template.Add_Contact_Page.events({
  'submit .contact-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const firstName = event.target.First.value;
    const lastName = event.target.Last.value;
    const address = event.target.Address.value;
    const phone = event.target.Telephone.value;
    const email = event.target.Email.value;

    const newContactData = { firstName, lastName, address, phone, email };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ContactSchema.clean(newContactData);
    // Determine validity.
    instance.context.validate(newContactData);
    if (instance.context.isValid()) {
      Contact.insert(newContactData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

