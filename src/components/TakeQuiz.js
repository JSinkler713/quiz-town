import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function TakeQuiz() {
  const handleChange = ()=> 'hey'
  return (
      <div className="TakeQuiz">
        <div className='main-content'>
          <div className='welcome'>
            <h1>Quiz</h1>
            <h1>Time</h1>
          </div>
          <div className='create-quiz'>
            <h3>Take A Quiz</h3>
            <div className='underline'></div>
            <div className='input-container'> 
              <input className='quizName' onChange={handleChange} placeholder='Quiz Name'></input>
            </div>
            <div className='img-and-build'>
              <button>Search</button>
            </div>
          </div>
          <div className='create-quiz'>
            <img src='/pencil.png' />
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>
  );
}

export default TakeQuiz;
