const url = 'http://localhost:4000/api/v1'

class QuizModel {
  static create = async(name)=> {
    let response = await fetch(`${url}/quiz`, {
      method: 'POST',
      // oh my god, had it as 'Content-Type'
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name })
    })
    response = await response.json()
    return response
  }
  static getAll = async()=> {
    let quizzes = await fetch(`${url}/quiz`)
    quizzes = await quizzes.json()
    return quizzes
  }
  static searchQuizzes= async(input)=> {
    try {
      let quizzes = await fetch(`${url}/quiz/search/${input}`)
      quizzes  = await quizzes.json()
      return quizzes

    } catch (err) {
      console.log('error finding quizzes with that search', err);
    }
  }
}
        
export default QuizModel

