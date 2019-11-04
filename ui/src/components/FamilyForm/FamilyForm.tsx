import React from 'react';

import { Family } from '../../model/Family';

interface FamilyFormProps {
  family: Family | undefined;
}

const FamilyForm: React.FC<FamilyFormProps> = (props) => {
  return (
    <>
      <h2>{props.family ? 'Edit' : 'New'} Family</h2>

      <p>
        Last Name: <input value={props.family ? props.family.last_name : ''} />
      </p>
    </>
  );
}

export default FamilyForm;
