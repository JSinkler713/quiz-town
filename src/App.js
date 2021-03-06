import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import CreateQuiz from './components/CreateQuiz.js';
import CreateQuizQuestions from './components/CreateQuizQuestions.js';
import TakeQuiz from './components/TakeQuiz.js';
import Quiz from './components/Quiz.js'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route >
        <Route path="/create/questions" render={(props) => 
            <CreateQuizQuestions {...props} />} />
        <Route path="/create" >
          <CreateQuiz />
        </Route>
        <Route exact path="/take" >
          <TakeQuiz />
        </Route>
        <Route path='/take/:id' render={(props)=> 
          <Quiz {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
