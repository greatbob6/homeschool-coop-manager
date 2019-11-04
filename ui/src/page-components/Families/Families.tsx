import React from 'react';
import { Route } from 'react-router-dom';

import FamilyForm from '../../components/FamilyForm/FamilyForm';
import FamilyList from '../../components/FamilyList/FamilyList';

import { families } from '../../temp-data/family-data';

const Families: React.FC = () => {
  return (
    <>
      <h1>Families</h1>

      <Route path="/families/add" component={FamilyForm} />

      <FamilyList families={families} />
    </>
  );
}

export default Families;
