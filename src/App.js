import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import CreateQuiz from './components/CreateQuiz.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route >
        <Route path="/create" >
          <CreateQuiz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
