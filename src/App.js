import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CRUD from './Components/CRUD';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/CRUD' component={CRUD} />
        </Switch>
      </Router>
    </>
  );
}

export default App;