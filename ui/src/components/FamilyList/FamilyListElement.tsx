import React from 'react';

import './FamilyListElement.css';

import { Family } from '../../model/Family';

interface FamilyListElementProps {
  family: Family;
}

const FamilyListElement: React.FC<FamilyListElementProps> = (props) => {
  return (
    <div className="FamilyListElement">
      <h4>{props.family.last_name}</h4>
      <p>Status: {props.family.membership_status}</p>
    </div>
  );
}

export default FamilyListElement;
