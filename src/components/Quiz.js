import React, {useState, useEffect} from 'react';

const Quiz = (props)=> {
    const [quiz, setQuiz] = useState(props.location.state.quiz)
    const [question, setQuestion] = useState(props.location.state.quiz.questions[0].prompt)
    const [answers, setAnswers] = useState(props.location.state.quiz.questions[0].answers)
    const [correctAnswer, setCorrectAnswer] = useState()
    useEffect(()=> {
        console.log(props.location.state.quiz)
      }, [])

    return (
        <div>
           {props.match.params.id}
        { quiz.name ? quiz.name : 'hmmm'}
        </div>
    );
}

export default Quiz;