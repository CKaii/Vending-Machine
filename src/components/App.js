import React from 'react';
import './App.css';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/Soda' render={() => <Soda />} />
          <Route exact path='/Chips'render={() => <Chips />} />
          <Route exact path='/Sardines'render={() => <Sardines />} />
        </Switch>
      </div>
    );
  }
}

export default App;
