const url = 'http://localhost:4000/api/v1'

class QuestionModel {
  static create = async(question)=> {
    let response = await fetch(`${url}/question`, {
      method: 'POST',
      // oh my god, had it as 'Content-Type'
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify( question )
    })
    response = await response.json()
    return response
  }
}
        
export default QuestionModel

