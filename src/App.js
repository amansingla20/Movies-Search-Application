import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Movie from './Movie';
function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path = '/movie_dashboard' component={Movie}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
