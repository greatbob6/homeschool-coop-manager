import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './FamilyForm.css';

import { Family } from '../../model/Family';

interface FamilyFormProps {
  family: Family | undefined;
}

const FamilyForm: React.FC<FamilyFormProps> = (props) => {
  const initialValues : Family = props.family ? props.family : {
    id: '',
    last_name: '',
    church: '',
    address: { street1: '', street2: '', city: '', state: '', zip_code: '' },
    emergency_contact: { name: '', phone_number: '' },
    membership_status: '',
    notes: '',

    parents: [],
    kids: []
  };

  return (
    <div className="FamilyForm">
      <h2>{props.family ? 'Edit' : 'New'} Family</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          last_name: Yup.string()
            .required('Required'),
          church: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <Field id="last_name" type="text" />
            <ErrorMessage name="last_name" />
          </div>
          
          <div>
            <label htmlFor="church">Church</label>
            <Field id="church" type="text" />
            <ErrorMessage name="church" />
          </div>
          
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FamilyForm;
