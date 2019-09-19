import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import PageHeader from './components/PageHeader/PageHeader'; 

import Index from './page-components/Index/Index';
import Classes from './page-components/Classes/Classes';

const App: React.FC = () => {
  return (
    <Router>
      <PageHeader />
      <div className="pageBody">
        <NavBar />
        <div className="pageContent">
            <Route path="/" exact component={Index} />
            <Route path="/classes" component={Classes} />
        </div>
      </div>
    </Router>
  );
}

export default App;
