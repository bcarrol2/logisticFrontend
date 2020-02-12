import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';
import ClientProducts from './components/ClientProducts';
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/products" exact component={ClientProducts}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
