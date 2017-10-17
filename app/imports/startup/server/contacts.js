import { Contact } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Bill', last: 'Burr',
    address: '1032 Musgrave Street., Honolulu, HI',
    phone: '808-809-7832', email: 'burr@gmail.com' },
  { first: 'Bob', last: 'Builder',
    address: '76-895 Dole Street., Honolulu, HI',
    phone: '808-422-2222', email: 'builderbob@gmail.com' },
  { first: 'Ian', last: 'Cryston',
    address: '45-281 Kahimoe Place., Waipahu, HI',
    phone: '808-521-3302', email: 'idubbz@gmail.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contact) {
    Contact.insert(contact);
  });
}
