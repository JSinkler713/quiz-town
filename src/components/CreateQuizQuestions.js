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


function CreateQuizQuestions(props) {
  const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [realQuiz, setRealQuiz] = useState()
  const [show, setShow] = useState(false)

  useEffect(()=> {
    console.log(props.location.state.quiz)
    setRealQuiz(props.location.state.quiz)
  }, [])

  function handleChange(e) {
    if (e.target.id === 'question') {
      setQuestion(e.target.value);
    } else if (e.target.id === 'answer1') {
      setAnswer1(e.target.value);
    } else if (e.target.id === 'answer2') {
      setAnswer2(e.target.value);
    } else if (e.target.id === 'answer3') {
      setAnswer3(e.target.value);
    } else if (e.target.id === 'answer4') {
      setAnswer4(e.target.value);
    }
  }
  async function createQuestion(e) {
    e.preventDefault()
    console.log('click submit with value', question)
    //const Quiz = await Promise.resolve(QuizModel.create(quizName))
    //await console.log(Quiz)
    //await setRealQuiz(Quiz)
  }

  Modal.setAppElement(document.getElementById('root'));
  
  if (realQuiz){
  return (
      <div className="CreateQuizQuestions">
        <div className='header'>
          <img src='/hammer.png' />
          <h1>{realQuiz.quiz.name}</h1>
          <img src='/hammer.png' />
        </div>

        <div className='question'>
          <h2>Q.</h2>
          <textarea id='question' rows='4' cols='40' type='text' onChange={handleChange} placeholder='Type your Question here' />
        </div>

        <div className='answers-container'>
          <div className='answer'> 
            <h3> A:</h3>
            <input id='answer1' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img src='/checkmark.png' />
                <img src='/cross.png' />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input id='answer2' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img src='/checkmark.png' />
                <img src='/cross.png' />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input  id='answer3' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img src='/checkmark.png' />
                <img src='/cross.png' />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input  id='answer4' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img src='/checkmark.png' />
                <img src='/cross.png' />
            </div>
          </div>
        </div>
        <Modal isOpen={show} >
          <h2>That question is taken</h2>
          <h3></h3>
          <Link to='/'>
            <h2>Add Questions</h2>
          </Link>
        </Modal>
      </div>
    );
   } else {
     return <div> Loading up </div>
   }
}
export default CreateQuizQuestions;
