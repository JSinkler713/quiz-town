import React, { useState, useEffect } from 'react';
import QuizModel from '../models/quiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function CreateQuiz() {
  const [quizName, setQuizName] = useState('')
  const [realQuiz, setRealQuiz] = useState('')

  function handleChange(e) {
    setQuizName(e.target.value);
  }
  async function createQuiz(e) {
    e.preventDefault()
    console.log('click submit with value', quizName)
    const Quiz = await Promise.resolve(QuizModel.create(quizName))
    await console.log(Quiz)
    await setRealQuiz(Quiz)
  }

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
            <form>
              <div className='input-container'> 
                <input className='quizName' onChange={handleChange} placeholder='Quiz Name'></input>
                </div>
              <div className='img-and-build'>
                  <img src='/hammer.png' />
                  <button onClick={createQuiz}>Bill</button>
              </div>
            </form>
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>
  );
}

export default CreateQuiz;
