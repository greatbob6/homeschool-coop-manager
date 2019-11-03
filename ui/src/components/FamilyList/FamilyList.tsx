import React from 'react';

import './FamilyList.css';

import FamilyListElement from './FamilyListElement';

import { Family } from '../../model/Family';

interface FamilyListProps {
  families: Family[];
}

const FamilyList: React.FC<FamilyListProps> = (props) => {
  return (
    <div className="FamilyList">
      {props.families.map(family => {
        return (
          <FamilyListElement key={family.id} family={family} />
        );
      })}
    </div>
  );
}

export default FamilyList;
