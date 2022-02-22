import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js"

function _drawQuestions() {
  console.log('drawing questions')
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template

}
export class QuestionsController {

  constructor() {
    console.log('questions controller loaded');
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()

  }

  async getQuestions() {
    try {
      console.log("started get questions");
      await questionsService.getQuestions()
      console.log('finished getting questions')
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }


  answerQuestion(id, guess) {
    questionsService.answerQuestion(id, guess)
  }

}