import React, {useState, useEffect} from 'react';
import QuizModel from '../models/quiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../main.scss'


function TakeQuiz() {
  const [quizzes, setQuizzes] = useState([])
  const [input, setInput] = useState('')
  const [hidden, hidePencil] = useState(false)

  const handleInput = (e)=> {
    console.log(e.target.value)
     setInput(e.target.value)
  }

  const [values, setValues] = useState(undefined)

  const fetchAll = async()=> {
    const quizResponse = await Promise.resolve(QuizModel.getAll())
    await setQuizzes(quizResponse.quizzes) 
  }
  const fetchByName = async()=> {
    const quizResponse = await Promise.resolve(QuizModel.searchQuizzes(input))
    await setQuizzes(quizResponse.quizzes)
    await hidePencil('true')
  }
  
  useEffect(()=> {
    document.querySelector('#pencil').classList.toggle('hidden')
    let tempValues = quizzes.map((quiz, i)=> {
      return(
        <Link to={{
          pathname: `/take/${quiz._id}`,
          state: {
            quiz: quiz
          }
        }}>
        <h4>{quiz.name}</h4>
      </Link>
      ) 
    })
    setValues(tempValues)
  }, [quizzes])

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
              <input className='quizName'  value={input} onChange={handleInput} ></input>
            </div>
            <div className='img-and-build'>
              <button onClick={fetchByName}>Search</button>
            </div>
          </div>
          <div className='create-quiz'>
            <img id='pencil' src='/pencil.png' className={ hidden ?'hidden': ''} />
            <div id='quizValues'>
              { quizzes.length > 0 ? values : ''}
            </div>
          </div>
        </div>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>
  );
}

export default TakeQuiz;
