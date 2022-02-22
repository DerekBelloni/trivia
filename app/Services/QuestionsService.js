import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";


class QuestionsService {
  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=17&type=boolean')
    console.log('response data', response.data)
    let questions = response.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }

  answerQuestion(id, guess) {
    let answer = ProxyState.questions.find(a => a.id == id)
    if (answer.answer == guess) {
      (Pop.toast("You Are Correct"))
    } else (Pop.toast("Wrong choice dummy!"))
  }
}

export const questionsService = new QuestionsService();