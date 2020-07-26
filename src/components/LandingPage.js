import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function LandingPage() {
  return (
      <div className="LandingPage">
        <div className='main-content'>
          <div className='welcome'>
            <h1>Welcome to QuizTown</h1>
          </div>
          <div className='create-quiz'>
            <Link to='/create'>
              <h2>Create A Quiz</h2>
            </Link>
            <div className='underline'></div>
            <img src='/hammer.png' styles={ 'width: 200px'} />
          </div>
          <div className='take-quiz'>
            <Link to='/take'>
              <h2>Take A Quiz</h2>
            </Link>
            <div className='underline'></div>
            <img src='/pencil.png' />
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>
  );
}

export default LandingPage;
