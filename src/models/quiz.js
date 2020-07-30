const url = 'http://localhost:4000/api/v1'

class QuizModel {
  static create = (name)=> {
    fetch(`${url}/quiz`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })
      .then((result)=> result.json())
      .then(data => (data.quiz))
  //  result = await function (result) { return result.quiz }
//    .then(res => res.json())
 //   .then(data => (data.quiz))
    //not working maybe CORS
   // return result
  }
}

export default QuizModel

