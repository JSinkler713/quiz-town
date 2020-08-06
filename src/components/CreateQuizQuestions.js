import React, { useState, useEffect } from 'react';
import QuizModel from '../models/quiz';
import QuestionModel from '../models/question';
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
  const [answer1, setAnswer1] = useState({
        text: '',
        correct: false
  })
  const [answer2, setAnswer2] = useState({
         text: '',
         correct: false
  })
  const [answer3, setAnswer3] = useState({
         text: '',
         correct: false
  })
  const [answer4, setAnswer4] = useState({
         text: '',
         correct: false
  })
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
      let holder = {
        correct: answer1.correct,
        text: e.target.value
      }
      setAnswer1(holder);
    } else if (e.target.id === 'answer2') {
      let holder = {
        correct: answer2.correct,
        text: e.target.value
      }
      setAnswer2(holder);
    } else if (e.target.id === 'answer3') {
      let holder = {
        correct: answer3.correct,
        text: e.target.value
      }
      setAnswer3(holder);
    } else if (e.target.id === 'answer4') {
      let holder = {
        correct: answer3.correct,
        text: e.target.value
      }
      setAnswer4(holder);
    } 

    // these are click events
    // for the check marks
  }

  const handleTrueClick = (e) => {
    if (e.target.id === 'answer1Correct') {
      let holder = {
        text: answer1.text,
        correct: true
      }
      setAnswer1(holder);
    } else if (e.target.id === 'answer2Correct') {
      let holder = {
        text: answer2.text,
        correct: true
      }
      setAnswer2(holder);
    } else if (e.target.id === 'answer3Correct') {
      let holder = {
        text: answer3.text,
        correct: true
      }
      setAnswer3(holder);
    } else if (e.target.id === 'answer4Correct') {
      let holder = {
        text: answer4.text,
        correct: true
      }
      setAnswer4(holder);
    }
  } 
  const handleFalseClick = (e) => {
    if (e.target.id === 'answer1Wrong') {
      let holder = {
        text: answer1.text,
        correct: false
      }
      setAnswer1(holder);
    } else if (e.target.id === 'answer2Wrong') {
      let holder = {
        text: answer2.text,
        correct: false
      }
      setAnswer2(holder);
    } else if (e.target.id === 'answer3Wrong') {
      let holder = {
        text: answer3.text,
        correct: false
      }
      setAnswer3(holder);
    } else if (e.target.id === 'answer4Wrong') {
      let holder = {
        text: answer4.text,
        correct: false
      }
      setAnswer4(holder);
    }
  } 


  async function createQuestion(e) {
    e.preventDefault()
    //check if there is 1 correct response
    let answers = [ answer1, answer2, answer3, answer4]
    let count = 0; 
    answers.forEach(answer=> {
      if (answer.correct) {
        count++
      }
    })
    //structure the questionObject for the fetch request
    let questionObject = {
      prompt: question,
      answers,
      quiz: realQuiz.quiz._id 
    }
    console.log(questionObject)
    if (count === 1) {
      console.log('it is ready to be uploaded')
      setShow(true)

    } else {
      console.log('choose One true answer')
    }
    const Question = await Promise.resolve(QuestionModel.create(questionObject))
    await console.log(Question)

  }
        
  const resetFields = ()=> {
    //reset fields

    setShow(false)
    let answersArray = document.querySelectorAll('.answer')
    answersArray.forEach((el)=> {
      el.placeholder = ''
      el.value = ''
    });
    //reset state of input
    let holder = {
      text: '',
      correct: false
    }
    setAnswer1(holder);
    setAnswer2(holder);
    setAnswer3(holder);
    setAnswer4(holder);
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

        <form>
        <div className='question'>
          <h2>Q.</h2>
          <textarea id='question' rows='4' cols='40' type='text' onChange={handleChange} placeholder='Type your Question here' />
        </div>

        <div className='answers-container'>
          <div className='answer'> 
            <h3> A:</h3>
            <input id='answer1' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img id='answer1Correct' src='/checkmark.png' onClick={handleTrueClick} />
                <img id='answer1Wrong' src='/cross.png' onClick={handleFalseClick} />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input id='answer2' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img id='answer2Correct' src='/checkmark.png' onClick={handleTrueClick} />
                <img id='answer2Wrong' src='/cross.png' onClick={handleFalseClick} />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input  id='answer3' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img id='answer3Correct' src='/checkmark.png' onClick={handleTrueClick} />
                <img id='answer3Wrong' src='/cross.png' onClick={handleFalseClick} />
            </div>
          </div>
          <div className='answer'> 
            <h3> A:</h3>
            <input  id='answer4' className='answer' onChange={handleChange} placeholder='write your answer here'></input>
            <div className='wrong-right'>
                <img id='answer4Correct' src='/checkmark.png' onClick={handleTrueClick} />
                <img id='answer4Wrong' src='/cross.png' onClick={handleFalseClick} />
            </div>
          </div>
        </div>
          <button onClick={createQuestion} />
        </form>
        <Modal isOpen={show} >
          <h2>Adding your question</h2>
          <h3></h3>
          <button onClick={resetFields}><h2>Add more Questions?</h2></button>
          <a href='#'> Placeholder, finish quiz</a>
        </Modal>
      </div>
    );
   } else {
     return <div> Loading up </div>
   }
}
export default CreateQuizQuestions;
