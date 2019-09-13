import React from 'react';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
// import Wizard from './components/wizard/Wizard';
import Header from './components/header/Header';
import { HashRouter as Router } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Header/>
        <div>
          {routes}
        </div>
      </header>
    </Router>
  );
}

export default App;
