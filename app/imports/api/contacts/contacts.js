import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contact = new Mongo.Collection('Contact');

/**
 * Create the schema for Stuff
 */
export const ContactSchema = new SimpleSchema({
  firstName: {
    label: 'first',
    type: String,
    optional: false,
    max: 20,
  },
  lastName: {
    label: 'last',
    type: String,
    optional: false,
    max: 20,
  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 100,
  },
  phone: {
    label: 'phone',
    type: String,
    optional: false,
    max: 20,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 30,
  },

});

Contact.attachSchema(ContactSchema);
