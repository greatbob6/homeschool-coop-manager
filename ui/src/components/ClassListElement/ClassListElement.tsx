import React from 'react';

import './ClassListElement.css';

import { Class } from '../../model/Class';

interface ClassListElementProps {
  class: Class;
}

const ClassListElement: React.FC<ClassListElementProps> = (props) => {
  return (
    <div className="ClassListElement">
      <h4>{props.class.name}</h4>
      <p>{props.class.description}</p>
    </div>
  );
}

export default ClassListElement;
