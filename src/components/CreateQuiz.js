import React, { useState, useEffect } from 'react';
import QuizModel from '../models/quiz';
import Modal from 'react-modal';
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
  const [show, setShow] = useState(false)

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

  useEffect(()=> {
    if (realQuiz && !show) {
      setShow(true)
    }
  })

  Modal.setAppElement(document.getElementById('root'));

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
                  <button onClick={createQuiz}>Build</button>
              </div>
            </form>
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
        <Modal isOpen={show} >
          <h3>{quizName}</h3>
          <Link to={{
            pathname: '/create/questions',
            state: {
              quiz: realQuiz
              }
            }}>
            <h4>Add Questions</h4>
          </Link>
        </Modal>
    </div>

  );
}

export default CreateQuiz;
