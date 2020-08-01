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
}
        
export default QuizModel

