import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import Question from './Question'
const Quiz = (props)=> {
    const [quiz, setQuiz] = useState(props.location.state.quiz)
    const [gameOver, setGameOver] = useState(false)
    //hold questionNumber in state
    //as each question is answered, update question Number
    const [questionNumber, setQuestionNumber] = useState(0)
    //which in turn updates question
    const [question, setQuestion] = useState(props.location.state.quiz.questions[questionNumber].prompt)
    //which in turn updates answers
    const [answers, setAnswers] = useState(props.location.state.quiz.questions[questionNumber].answers)
    //which in turn updates correctAnswer
    const [correctAnswer, setCorrectAnswer] = useState()
    //keep track of totalCorrect
    const [totalCorrect, setTotalCorrect] = useState(0)
    
    //checking if I have quiz
    //I do have it as props.location.state.quiz
    useEffect(()=> {
       setQuestion(quiz.questions[questionNumber].prompt) 
       setAnswers(quiz.questions[questionNumber].answers)
      }, [questionNumber])

    const checkTrue = (truth)=> {
        console.log(truth)
        if (truth) {
            setTotalCorrect((prevState)=> prevState+1)
        }
        if (questionNumber === props.location.state.quiz.questions.length - 1) {
            console.log('game over yo')
            setGameOver(true)
            //Link to display page, or show component display page
        } else {
            setQuestionNumber((prevState)=> prevState + 1)
        }
    }
    return (
        <div>
        <h1>{ quiz.name ? quiz.name : 'hmmm'}</h1>
        <div className='question-holder'>
        { !gameOver ? <h2>{question}</h2> : <h2>Nice Work</h2> }
            { !gameOver ? answers.map((answer,i)=> {
                return (
                    <div>
                    <Question answer={answer.text} checkTrue={checkTrue} correct={answer.correct} />
                    </div>
                )
            })
            : `You got ${totalCorrect}/${questionNumber + 1} correct.`
        }
        </div>
            <Link to='/'>Back to Main</Link>
        </div>
    );
}

export default Quiz;