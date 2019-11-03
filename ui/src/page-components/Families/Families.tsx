import React from 'react';

import FamilyList from '../../components/FamilyList/FamilyList';

import { families } from '../../temp-data/family-data';

const Families: React.FC = () => {
  return (
    <>
      <h1>Families</h1>

      <FamilyList families={families} />
    </>
  );
}

export default Families;
