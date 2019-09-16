import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import PageHeader from './components/PageHeader/PageHeader'; 

const App: React.FC = () => {
  return (
    <>
      <PageHeader />
      <div className="pageBody">
        <NavBar />
        <div className="pageContent">
          Page content goes here.
        </div>
      </div>
    </>
  );
}

export default App;
