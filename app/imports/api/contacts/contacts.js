import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Contact = new Mongo.Collection('Contact');

export const ContactSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 100,
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 20,
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 30,
  },
});

Contact.attachSchema(ContactSchema);
