import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function CreateQuiz() {
  const handleChange = ()=> 'hey'
  return (
      <div className="CreateQuiz">
        <div className='main-content'>
          <div className='welcome'>
            <h1>Build</h1>
            <h1>Time</h1>
          </div>
          <div className='create-quiz'>
            <img src='/hammer.png' />
          </div>
          <div className='create-quiz'>
            <h3>Create A Quiz</h3>
            <div className='underline'></div>
            <div className='input-container'> 
              <input className='quizName' onChange={handleChange} placeholder='Quiz Name'></input>
            </div>
            <div className='img-and-build'>
                <img src='/hammer.png' />
                <button>Build</button>
            </div>
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>
  );
}

export default CreateQuiz;
