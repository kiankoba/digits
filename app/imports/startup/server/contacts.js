import { Contact } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contact to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { firstName: 'Bill',
    lastName: 'Burr',
    address: '1032 Musgrave Street., Honolulu, HI',
    phone: '808-809-7832',
    email: 'burr@gmail.com' },
  { firstName: 'Bob',
    lastName: 'Builder',
    address: '76-895 Dole Street., Honolulu, HI',
    phone: '808-422-2222',
    email: 'builderbob@gmail.com' },
  { firstName: 'Ian',
    lastName: 'Cryston',
    address: '45-281 Kahimoe Place., Waipahu, HI',
    phone: '808-521-3302',
    email: 'idubbz@gmail.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contact) {
    Contact.insert(contact);
  });
}
