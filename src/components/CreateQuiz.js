import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function CreateQuiz() {
  return (
      <div className="CreateQuiz">
        <div className='main-content'>
          <div className='welcome'>
            <h1>Build</h1>
            <h1>Time</h1>
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

export default CreateQuiz;
