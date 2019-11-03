import { Family } from '../model/Family';

export const families : Family[] = [
  {
    id: 'FAMILY1',
    last_name: 'Jones',
    church: '1st Presbyterian',
    address: {
      street1: '123 First St',
      street2: null,
      city: 'Spokane',
      state: 'WA',
      zip_code: '12345'
    },
    emergency_contact: {
      name: 'Grandma Jones',
      phone_number: '123 456-7890'
    },
    membership_status: 'Paid',
    notes: ''
  },
  {
    id: 'FAMILY2',
    last_name: 'Smith',
    church: 'Living Hope',
    address: {
      street1: '456 Second St',
      street2: null,
      city: 'Spokane',
      state: 'WA',
      zip_code: '12345'
    },
    emergency_contact: {
      name: 'Grandpa Smith',
      phone_number: '987 654-3210'
    },
    membership_status: 'Paid',
    notes: ''
  },
];
