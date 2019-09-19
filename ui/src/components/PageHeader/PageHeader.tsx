import React from 'react';
import './PageHeader.css';

const PageHeader: React.FC = () => {
  return (
    <div className="PageHeader">
      <h1>Homeschool Coop Manager</h1>

      <div className="userProfile">
        <div className="avatar">ME</div>
      </div>
    </div>
  );
}

export default PageHeader;
