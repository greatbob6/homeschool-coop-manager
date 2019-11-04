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
    notes: '',
    parents: [
      {
        id: 'JONESPARENT1',
        first_name: 'Jane',
        last_name: 'Jones',
        email: 'jane.jones@email.com',
        spouse_name: 'Jimmy',
        phone: { phone_number: '123 123-1234', type: 'Mobile' },
        gender: 'Female',
        
        password: '12345',
        family_id: 'FAMILY1'
      }
    ],
    kids: [
      {
        id: 'JONESKID1',
        first_name: 'Jim',
        last_name: 'Jones',
        email: 'jim.jones@email.com',
        birthdate: new Date(2000, 1, 1),
        graduation_year: 2020,
        gender: 'Male',

        password: '12345',
        family_id: 'JONES1'
      },
      {
        id: 'JONESKID2',
        first_name: 'Janet',
        last_name: 'Jones',
        email: 'janet.jones@email.com',
        birthdate: new Date(2010, 1, 1),
        graduation_year: 2030,
        gender: 'Female',

        password: '12345',
        family_id: 'JONES1'
      }
    ]
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
    notes: '',
    parents: [
      {
        id: 'SMITHPARENT1',
        first_name: 'Sally',
        last_name: 'Smith',
        email: 'sally.smith@email.com',
        spouse_name: 'Steve',
        phone: { phone_number: '123 123-1234', type: 'Mobile' },
        gender: 'Female',
        
        password: '12345',
        family_id: 'FAMILY2'
      },
      {
        id: 'SMITHPARENT2',
        first_name: 'Steve',
        last_name: 'Smith',
        email: 'Steve.smith@email.com',
        spouse_name: 'Sally',
        phone: { phone_number: '123 123-1234', type: 'Mobile' },
        gender: 'Male',
        
        password: '12345',
        family_id: 'FAMILY2'
      }
    ],
    kids: [
      {
        id: 'SMITHKID1',
        first_name: 'Samantha',
        last_name: 'Smith',
        email: 'samantha.smith@email.com',
        birthdate: new Date(2005, 1, 1),
        graduation_year: 2023,
        gender: 'Female',

        password: '12345',
        family_id: 'SMITH1'
      },
      {
        id: 'SMITHKID2',
        first_name: 'Sunny',
        last_name: 'Smith',
        email: 'sunny.smith@email.com',
        birthdate: new Date(2015, 1, 1),
        graduation_year: 2033,
        gender: 'Male',

        password: '12345',
        family_id: 'JONES1'
      }
    ]
  },
];
