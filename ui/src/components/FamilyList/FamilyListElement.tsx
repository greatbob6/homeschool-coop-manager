import React from 'react';

import './FamilyListElement.css';

import { Family } from '../../model/Family';

interface FamilyListElementProps {
  family: Family;
}

const FamilyListElement: React.FC<FamilyListElementProps> = (props) => {
  return (
    <div className="FamilyListElement">
      <p>
        <span className="ParentLast">{props.family.last_name}</span>
        <span className="ParentFirst">
          , {props.family.parents.map(p => p.first_name).join(' and ')}
        </span>
      </p>
      <p>Kids: {props.family.kids.map(k => k.first_name).join(', ')}</p>
      <p>Status: {props.family.membership_status}</p>
    </div>
  );
}

export default FamilyListElement;
