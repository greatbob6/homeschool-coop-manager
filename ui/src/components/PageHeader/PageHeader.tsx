import React from 'react';
import './PageHeader.css';

const PageHeader: React.FC = () => {
  return (
    <div className="PageHeader">
      <h1>North Spokane Homeschool Coop</h1>

      <div className="userProfile">
        <div className="avatar">UP</div>
      </div>
    </div>
  );
}

export default PageHeader;
